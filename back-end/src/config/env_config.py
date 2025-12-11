from dotenv import dotenv_values
import os

from config import PROJECT_ROOT

env = os.getenv('APP_ENV', 'dev')

def setup_env_vars():
  if env == 'production':
    return {
      **dotenv_values(os.path.join(PROJECT_ROOT, '.env.production'))
    }
  
  return {
    **dotenv_values(os.path.join(PROJECT_ROOT, '.env.dev'))
  }

