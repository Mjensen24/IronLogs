from flask.cli import AppGroup
from .users import seed_users, undo_users
from .workouts import seed_workouts, undo_workouts
from .exercises import seed_exercises, undo_exercises
from .diaryEntries import seed_diaryEntries, undo_diaryEntries

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_workouts()
    seed_exercises()
    seed_diaryEntries()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_workouts()
    undo_exercises()
    undo_diaryEntries()
    # Add other undo functions here
