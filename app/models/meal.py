from .db import db

class Meal(db.Model):
    __tablename__ = 'meals'

    id = db.Column(db.Integer, primary_key = True)
    mealEntryId = db.Column(db.Integer, db.ForeignKey('mealEntries.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    calories = db.Column(db.Integer, nullable=True)
    fat = db.Column(db.Integer, nullable=True)
    carbs = db.Column(db.Integer, nullable=True)
    water = db.Column(db.Integer, nullable=True)
