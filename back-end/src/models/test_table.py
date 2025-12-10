from src.config.db_config import db

class TestTable(db.Model):
  __tablename__ = "test_table"
  
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.String(50), nullable=False)