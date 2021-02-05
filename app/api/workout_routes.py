from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Workout, User, Exercise, db
from app.forms import WorkoutForm

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

@workout_routes.route('/exercises/<int:id>')
@login_required
def exercises(id):
    exercises = Exercise.query.filter(Exercise.userId==id).all()
    return {"exercises": [exercise.to_dict() for exercise in exercises]}

@workout_routes.route('/createworkout', methods=['POST'])
def workoutForm():
    form = WorkoutForm()
    # if form.validate_on_submit():
    workout = Workout(
        userId=current_user.id,
        title=form.data['title'],
        date=form.data['date']
    )
    db.session.add(workout)
    db.session.commit()
    return workout.to_dict()
    # return {}
