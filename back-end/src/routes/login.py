from flask import current_app
from datetime import datetime, timedelta, timezone

import bcrypt
import jwt
from flask import Blueprint, request

from src.models import Users
from src.config.db_config import db
from src.models.users import UserSchema

INVALID_CREDENTIALS_ERROR = {"message": 'Invalid credentials'}, 401

login_blueprint = Blueprint('login', __name__)

def is_credentials_correct(password, hashed_password):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

@login_blueprint.route('/', methods=['POST'])
def authenticate():
  data = request.get_json()
  user_schema = UserSchema()

  credentials = {
    "email": data['email'],
    "password": data['password']
  }
  
  errors = user_schema.validate(credentials, partial=True)
  
  if errors:
    return errors, 422
  
  user = db.session.query(Users).filter_by(email=data.get('email', '')).first()
  
  if not user:
    return INVALID_CREDENTIALS_ERROR
  
  if is_credentials_correct(credentials["password"], user.password_hash):
    encoded_jwt = jwt.encode(
      {
        "sub": user.get_slug(),
        "user_slug": user.get_slug(),
        "iat": datetime.now(timezone.utc),
        "exp": datetime.now(timezone.utc) + timedelta(minutes=30)
      },
      current_app.config["JWT_SECRET_KEY"],
      algorithm="HS256"
    )
    
    return { "auth_key": encoded_jwt }
  else:
    return INVALID_CREDENTIALS_ERROR
  
  
@login_blueprint.route('/validate_token', methods=['POST'])
def validate_token():
  token = request.headers.get('Authorization')
  try:
    jwt.decode(token, current_app.config["JWT_SECRET_KEY"], algorithms=["HS256"])
    return { "token": "valid_token" }
  except jwt.ExpiredSignatureError:
    return { "message": "Token expired. Please log in again" }, 401
  except jwt.InvalidTokenError:
    return { "message": "Invalid token. Please log in again" }, 401