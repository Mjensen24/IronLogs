from .db import db

class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key = True)
    workoutId = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    reps = db.Column(db.Integer, nullable = False)
    sets = db.Column(db.Integer, nullable = False)
    notes = db.Column(db.Text, nullable = True)
