import time
from flask import Flask
from config.env_config import setup_env_vars
from config.db_config import setup_database_connection

app = Flask(__name__)
app.config.from_mapping(setup_env_vars())
db = setup_database_connection(app)


class TestTable(db.Model):
    __tablename__ = "test_table"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50), nullable=False)

with app.app_context():
  db.session.add( TestTable(title='Title example {data_time}'.format(data_time=time.time())))
  db.session.commit()
  db.session.close()


@app.route("/")
def root():
  data_from_db = TestTable.query.all()
  
  all_data = []
  for row in data_from_db:
    all_data.append(row.title)
    
  return all_data


if __name__ == "__main__":
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host="127.0.0.1", port=4000, debug=True)

