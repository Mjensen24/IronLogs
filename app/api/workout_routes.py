from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Workout, User, Exercise, db
from app.forms import WorkoutForm, ExerciseForm

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
@login_required
def workoutForm():
    form = WorkoutForm()
    workout = Workout(
        userId=current_user.id,
        title=form.data['title'],
        date=form.data['date']
    )
    db.session.add(workout)
    db.session.commit()
    return workout.to_dict()

@workout_routes.route('/createexercise', methods=['POST'])
@login_required
def exerciseForm():
    data = request.json
    form = ExerciseForm()
    exercise = Exercise(
        userId=current_user.id,
        workoutId=data["workoutId"],
        title=form.data['title'],
        reps=form.data['reps'],
        sets=form.data['sets'],
        weight=form.data['weight'],
        notes=form.data['notes'],
    )
    db.session.add(exercise)
    db.session.commit()
    return exercise.to_dict()

@workout_routes.route('/exercise', methods=['DELETE'])
@login_required
def exerciseDelete(id):
    exercise = Exercise.query.get(id)
    db.session.delete(exercise)
    db.session.commit()
