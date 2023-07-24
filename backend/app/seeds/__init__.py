from flask.cli import AppGroup
from .users import seed_users, undo_users
from .characters import seed_characters, undo_characters
from .scenarios import seed_scenarios, undo_scenarios
from .user_scenarios import seed_user_scenarios, undo_user_scenarios
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_user_scenarios()
        undo_scenarios()
        undo_characters()
        undo_users()
    seed_users()
    seed_characters()
    seed_scenarios()
    seed_user_scenarios()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_user_scenarios()
    undo_scenarios()
    undo_characters()
    undo_users()
    # Add other undo functions here
