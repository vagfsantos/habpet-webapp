

import uuid
from src.config.db_config import db
from src.mixins.base_model import BaseModel
from marshmallow import Schema, fields, validate


class Habits(BaseModel):
  __tablename__ = 'habits'

  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
  slug = db.Column(db.Uuid, nullable=False, unique=True, default=uuid.uuid4)
  name = db.Column(db.String(150), nullable=False)
  frequency_type = db.Column(db.String(100), nullable=False)
  frequency_count = db.Column(db.Integer, nullable=False)
  duration_ms = db.Column(db.Integer, nullable=True)
  expires_at = db.Column(db.DateTime, nullable=True)
  

class HabitsSchema(Schema):
  id = fields.Int()
  slug = fields.UUID()
  user_id = fields.UUID()
  name = fields.Str(validate=validate.Length(min=2, max=150), required=True)
  frequency_type = fields.Str(validate=validate.OneOf(['day', 'week', 'month']), required=True)
  frequency_count = fields.Integer(required=True)
  duration_ms = fields.Integer(required=True)
  expires_at = fields.DateTime()
  created_at = fields.DateTime()
  updated_at = fields.DateTime()
  
  