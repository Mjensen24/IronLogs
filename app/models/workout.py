from .db import db

class Workout(db.Model):
    __tablename__ = 'workouts'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime(timezone=True), server_default=db.func.now())

    user = db.relationship('User', foreign_keys=userId)
    # exercises = db.relationship('Exercise', foreign_keys='Excercise.workoutId')
