from datetime import datetime, timezone

from src.config.db_config import db


class SoftDeleteMixin:
    deleted_at = db.Column(db.DateTime, nullable=True, default=None)
    
    def delete(self):
      self.deleted_at = datetime.now(timezone.utc)
      db.session.commit()

    @classmethod
    def query_active(cls):
        return db.session.query(cls).filter_by(deleted_at=None)

    @classmethod
    def query_deleted(cls):
        return db.session.query(cls).filter(cls.deleted_at.isnot(None))