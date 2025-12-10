from flask import Blueprint

test_bp = Blueprint('test_bp', __name__)

@test_bp.route('/', methods=['GET'])
def list_users():
  from src.models.test_table import TestTable
  
  data_from_db = TestTable.query.all()

  all_data = []
  for row in data_from_db:
    all_data.append(row.title)

  return all_data
