from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Workout

workout_routes = Blueprint('workouts', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@workout_routes.route('/workouts:<id>')
@login_required
