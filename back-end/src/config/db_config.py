import os
from flask_sqlalchemy import SQLAlchemy
from google.cloud.sql.connector import Connector
from flask_alembic import Alembic

db = SQLAlchemy()
alembic = Alembic()

def setup_database_connection(app):
  with app.app_context():
    if os.getenv('APP_ENV', 'dev') == "production":
      connector = Connector()
      app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        "creator": lambda: connector.connect(
          app.config["DB_INSTANCE_CONNECTION_NAME"],  # Cloud SQL Instance Connection Name
          "pymysql",
          user=app.config["DB_USER"],
          password=app.config["DB_PASS"],
          db=app.config["DB_NAME"],
          ip_type="public"  # "private" for private IP
        )
      }
  
    db.init_app(app)
    alembic.init_app(app)
    
    if alembic.needs_upgrade():
      alembic.upgrade()