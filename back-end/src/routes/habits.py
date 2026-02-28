from flask import Blueprint, request
from marshmallow import ValidationError
from flask_jwt_extended import jwt_required, get_jwt_identity
import uuid

from src import Users
from src.config.db_config import db
from src.models.habits import HabitsSchema, Habits

habits_blueprint = Blueprint('habits', __name__)

@habits_blueprint.route('/', methods=['POST'])
@jwt_required()
def create_habit():
  data = request.get_json()
  
  habits_schema = HabitsSchema()

  user_slug = get_jwt_identity()
  logged_user = db.session.query(Users).filter_by(slug=uuid.UUID(user_slug)).first_or_404(description="User not found")
  
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
def get_habits():
  habits_schema = HabitsSchema(many=True)
  user_slug = get_jwt_identity()
  logged_user = db.session.query(Users).filter_by(slug=uuid.UUID(user_slug)).first_or_404(description="User not found")
  
  habits = db.session.query(Habits).filter_by(user_id=logged_user.id).all()
  
  return habits_schema.dump(habits), 200
