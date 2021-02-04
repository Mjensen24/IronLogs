from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Workout, User
from flask_login import current_user

workout_routes = Blueprint('workouts', __name__)

@workout_routes.route('/')
@login_required
def workouts():
    workouts = Workout.query.all()
    return {"workouts": [workout.to_dict() for workout in workouts]}

@workout_routes.route('/<int:id>')
@login_required
def workouts_for_user(id):
    workouts = Workout.query.filter(Workout.userId==id).all()
    return {"workouts": [workout.to_dict() for workout in workouts]}
