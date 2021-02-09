from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import MealEntry, Meal, db
from app.forms import FoodForm, MealForm

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

@foodtracker_routes.route('meals/<int:id>')
@login_required
def user_meals(id):
    meals = Meal.query.filter(Meal.userId==id).all()
    return {"meals": [meal.to_dict() for meal in meals]}

@foodtracker_routes.route('createmeal', methods={'POST'})
@login_required
def mealForm():
    data = request.json
    form = MealForm()
    meal = Meal(
        userId=current_user.id,
        mealEntryId=data["mealEntryId"],
        title=form.data['title'],
        calories=form.data["calories"],
        fat=form.data["fat"],
        carbs=form.data["carbs"],
        water=form.data["water"]
    )
    db.session.add(meal)
    db.session.commit()
    return meal.to_dict()
