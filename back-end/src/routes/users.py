
import bcrypt
from flask import Blueprint, request
from marshmallow import ValidationError
from flask_jwt_extended import jwt_required, get_jwt_identity
import uuid

from src.config.db_config import db
from src.models.users import UserSchema

users_blueprint = Blueprint('users', __name__)
  
def get_encrypted_password(password):
  return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


@users_blueprint.route('/me', methods=['GET'])
@jwt_required()
def get_current_logged_user():
  from src.models.users import Users
  user_schema = UserSchema()

  user_slug = get_jwt_identity()
  logged_user = db.session.query(Users).filter_by(slug=uuid.UUID(user_slug)).first_or_404(description="User not found")

  if logged_user:
    return user_schema.dump(logged_user)


@users_blueprint.route('/', methods=['POST'])
def create_user():
  from src.models.users import Users
  
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