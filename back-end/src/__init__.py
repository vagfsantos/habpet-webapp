from flask import Flask

from src.config.db_config import setup_database_connection
from src.config.env_config import setup_env_vars
from src.models import *
from src.routes import base_blueprint
from src.routes.login import login_blueprint


def create_app():
  app = Flask(__name__)
  app.config.from_mapping(setup_env_vars())
  
  setup_database_connection(app)
  
  from src.routes.users import users_blueprint
  
  base_blueprint.register_blueprint(users_blueprint, url_prefix='/users')
  base_blueprint.register_blueprint(login_blueprint, url_prefix='/auth')
  
  app.register_blueprint(base_blueprint, url_prefix='/api')
  
  return app