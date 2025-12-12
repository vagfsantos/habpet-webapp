from datetime import datetime, UTC
from src.config.db_config import db


class TimeStampMixin:
  created_at = db.Column(db.DateTime, default=lambda: datetime.now(UTC), nullable=False)
  updated_at = db.Column(db.DateTime, default=lambda: datetime.now(UTC), nullable=False)