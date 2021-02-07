from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import MealEntry, Meal, db
# from app.forms import WorkoutForm, ExerciseForm

foodtracker_routes = Blueprint('foodtrackers', __name__)

@foodtracker_routes.route('/')
@login_required
def mealEntries():
    mealEntries = MealEntry.query.all()
    return {"mealEntries": [mealEntry.to_dict() for mealEntry in mealEntries]}

@foodtracker_routes.route('/<int:id>')
@login_required
def mealEntries_for_user(id):
    mealEntries = MealEntry.query.filter(MealEntry.userId==id).all()
    return {"mealEntries": [mealEntry.to_dict() for mealEntry in mealEntries]}
