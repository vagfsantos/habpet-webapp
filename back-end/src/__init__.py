from flask import Flask

from src.config.db_config import setup_database_connection
from src.config.env_config import setup_env_vars
from src.models import *

def create_app():
  app = Flask(__name__)
  app.config.from_mapping(setup_env_vars())
  
  setup_database_connection(app)
  
  from src.routes.test_routes import test_bp
  app.register_blueprint(test_bp, url_prefix='/api/tests')

  return app