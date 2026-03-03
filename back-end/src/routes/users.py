
import bcrypt
from flask import Blueprint, request
from marshmallow import ValidationError
from flask_jwt_extended import jwt_required

from src.config.db_config import db
from src.models.users import UserSchema, Users
from src.decorators import get_user_from_token

users_blueprint = Blueprint('users', __name__)
  
def get_encrypted_password(password):
  return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

@users_blueprint.route('/me', methods=['GET'])
@jwt_required()
@get_user_from_token
def get_current_logged_user(logged_user):
  user_schema = UserSchema()
  return user_schema.dump(logged_user)


@users_blueprint.route('/', methods=['POST'])
def create_user():
  data = request.get_json()

  user_schema = UserSchema()
  
  try:
    user = user_schema.load(data)
  except ValidationError as err:
    return err.messages, 422
  
  existing_user = db.session.query(Users).filter_by(email=user["email"]).one_or_none()
  if existing_user:
    return {"message": "E-mail already taken"}, 422
  
  new_user = Users()
  new_user.name = user["name"]
  new_user.email = user["email"]
  new_user.password_hash = get_encrypted_password(user["password"])
  
  db.session.add(new_user)
  db.session.commit()
  db.session.close()
  
  created_user = db.session.query(Users).filter_by(email=user["email"]).one()
  
  return { "slug": created_user.slug }, 201