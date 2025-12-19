import uuid
from src.config.db_config import db
from src.mixins.timestamp import TimeStampMixin
from marshmallow import Schema, fields, validate


class Users(TimeStampMixin, db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
  slug = db.Column(db.Uuid, nullable=False, unique=True, default=uuid.uuid4)
  name = db.Column(db.String(100), nullable=False)
  email = db.Column(db.String(120), nullable=False, unique=True)
  password_hash = db.Column(db.String(255), nullable=False)
  

class UserSchema(Schema):
  id = fields.Int()
  slug = fields.UUID()
  name = fields.Str(validate=validate.Length(min=2, max=100), required=True)
  email = fields.Email(required=True)
  password = fields.Str(validate=validate.Length(min=6, max=100), required=True)
  created_at = fields.DateTime()
  updated_at = fields.DateTime()