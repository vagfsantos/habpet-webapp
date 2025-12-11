# Habpet Back-End App

This app is built with Python and Flask framework.

---
## Getting started

- Install `Python 3.13.5`
- Install `MySQL 9.5.0`

Make sure to be inside the project folder
```
cd back-end/
```

Create the virtual machine
```
python -m venv venv
```

Active the virtual machine
```
source venv/bin/activate
```

Now install dependencies
```
pip install -r requirements.txt
```

### Database setup

1. Install MySQL database
2. Create a table called `habpet_dev`: Log in to your MySQL server using a user with CREATE privileges (often the root user).

```
mysql -u [username] -p
```

Create the database we will need
```
CREATE DATABASE IF NOT EXISTS habpet_dev;
```

Verify the database was created
```
SHOW DATABASES;
```

#### Setup env variables
1. Create a new file on project root called: `.env.dev`
2. Copy all content from `env.example` (don't touch this file)
3. Fill in the fields with you local info:
```
DB_USER="your_db_user_name" # user name of db
DB_PASS="your_password" # leave empty for no password
DB_NAME="habpet_dev" # the database name we created above
DB_HOST="127.0.0.1" # localhost
DB_PORT="3306" # db port
```

#### Migrations
1. Make sure SQL server is up
2. Now run migrations
```
flask db upgrade
```

### Run the project
1. Run the server
```
python main.py
```
2. Now go to `localhost:4000/api/tests`
3. You've done 🎉

