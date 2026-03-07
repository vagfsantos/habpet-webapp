from flask import Blueprint, request
from marshmallow import ValidationError
from flask_jwt_extended import jwt_required

from src.config.db_config import db
from src.models.habits import HabitsSchema, Habits
from src.decorators import get_user_from_token

habits_blueprint = Blueprint('habits', __name__)

@habits_blueprint.route('/', methods=['POST'])
@jwt_required()
@get_user_from_token
def create_habit(logged_user):
  data = request.get_json()
  habits_schema = HabitsSchema()
  
  try:
    habit = habits_schema.load(data)
  except ValidationError as err:
    return err.messages, 422
  
  new_habit = Habits()
  new_habit.name = habit['name']
  new_habit.frequency_type = habit['frequency_type']
  new_habit.frequency_count = habit['frequency_count']
  new_habit.duration_ms = habit['duration_ms']
  new_habit.expires_at = habit['expires_at']
  new_habit.user_id = logged_user.id
  
  db.session.add(new_habit)
  db.session.commit()

  return habits_schema.dump(new_habit), 201


@habits_blueprint.route('/', methods=['GET'])
@jwt_required()
@get_user_from_token
def get_habits(logged_user):
  habits_schema = HabitsSchema(many=True)
  habits = db.session.query(Habits).filter_by(user_id=logged_user.id).all()
  
  return habits_schema.dump(habits), 200


@habits_blueprint.route('/<uuid:habit_slug>', methods=['PATCH'])
@jwt_required()
@get_user_from_token
def update_habit(logged_user, habit_slug):
  habits_schema = HabitsSchema()
  data = request.get_json()
  
  habit = db.session.query(Habits).filter_by(slug=habit_slug, user_id=logged_user.id).first_or_404()
  allowed_fields_to_be_updated=['name', 'frequency_type', 'frequency_count', 'duration_ms', 'expires_at']
  
  for key in data.keys():
    if key not in allowed_fields_to_be_updated:
      return { "messsage": "Only {} fields can be updated".format(allowed_fields_to_be_updated) }, 422
      
  try:
    habit = habits_schema.load(data, partial=True, unknown='raise')
  except ValidationError as err:
    return err.messages, 422
  
  
  return habits_schema.dump(habit), 200
