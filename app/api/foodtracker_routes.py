from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import MealEntry, Meal, db
from app.forms import FoodForm

foodtracker_routes = Blueprint('foodtrackers', __name__)

@foodtracker_routes.route('/')
@login_required
def mealEntries():
    mealEntries = MealEntry.query.all()
    return {"mealEntries": [mealEntry.to_dict() for mealEntry in mealEntries]}

@foodtracker_routes.route('/<int:id>')
@login_required
def mealEntries_for_user(id):
    entries = MealEntry.query.filter(MealEntry.userId==id).all()
    return {"entries": [entry.to_dict() for entry in entries]}

@foodtracker_routes.route('createfoodentry', methods=['POST'])
@login_required
def foodForm():
    form = FoodForm()
    mealEntry = MealEntry(
        userId=current_user.id,
        title=form.data['title'],
        date=form.data['date']
    )
    db.session.add(mealEntry)
    db.session.commit()
    return mealEntry.to_dict()
