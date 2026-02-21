from src.config.db_config import db
from src.mixins.timestamp import TimeStampMixin


class BaseModel(db.Model, TimeStampMixin):
  __abstract__ = True
  def get_slug(self):
    return str(self.slug)
  
  def __repr__(self):
    attrs = []
    for key, value in self.__dict__.items():
      # Exclude SQLAlchemy's internal state attributes (prefixed with '_')
      if not key.startswith('_'):
        attrs.append(f"{key}={repr(value)}")

    return f"<{self.__class__.__name__}({', '.join(attrs)})>"
