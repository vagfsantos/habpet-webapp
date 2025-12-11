from flask_sqlalchemy import SQLAlchemy
from google.cloud.sql.connector import Connector


def setup_database_connection(app):
  if app.config.get("ENV") == "production":
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

  db = SQLAlchemy()
  db.init_app(app)

  return db