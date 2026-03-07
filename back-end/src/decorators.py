from functools import wraps
from flask_jwt_extended import get_jwt_identity
import uuid

from src.config.db_config import db
from src.models.users import Users


def get_user_from_token(f):
    """
    A decorator to get the user from the JWT token.
    It fetches the user from the database and passes it as an argument to the decorated function.
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_slug = get_jwt_identity()
        logged_user = db.session.query(Users).filter_by(slug=uuid.UUID(user_slug)).first_or_404(description="User not found")
        return f(logged_user, *args, **kwargs)
    return decorated_function