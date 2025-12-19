import bcrypt
from flask import Blueprint, request

from src.models import Users
from src.config.db_config import db

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route('/', methods=['POST'])
def authenticate():
  data = request.get_json()
  
  user = db.session.query(Users).filter_by(email=data['email']).first()
  
  if bcrypt.checkpw(data['password'].encode('utf-8'), user.password_hash.encode('utf-8')):
    return { "login": True }
  else:
    return { "login": False }