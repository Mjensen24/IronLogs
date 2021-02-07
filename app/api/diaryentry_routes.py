from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Workout, User, Exercise, DiaryEntry, db
from app.forms import DiaryForm

diaryentry_routes = Blueprint('diaryentries', __name__)

@diaryentry_routes.route('/<int:id>')
@login_required
def diaryentries_for_user(id):
    entries = DiaryEntry.query.filter(DiaryEntry.userId==id).all()
    return {"entries": [entry.to_dict() for entry in entries]}

@diaryentry_routes.route('/createentry', methods=['POST'])
def entryForm():
    form = DiaryForm()
    entry = DiaryEntry(
        userId=current_user.id,
        title=form.data['title'],
        notes=form.data['notes'],
        date=form.data['date']
    )
    db.session.add(entry)
    db.session.commit()
    return entry.to_dict()
