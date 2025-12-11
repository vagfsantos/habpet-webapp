from dotenv import load_dotenv, dotenv_values
import os

env = os.getenv('APP_ENV', 'dev')

current_script_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.join(current_script_dir, os.pardir)

def setup_env_vars():
  if env == 'production':
    return {
      **dotenv_values(os.path.join(parent_dir, '.env.production'))
    }
  
  return {
    **dotenv_values(os.path.join(parent_dir, '.env.dev'))
  }

