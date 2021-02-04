from .db import db

class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    workoutId = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    reps = db.Column(db.Integer, nullable = False)
    sets = db.Column(db.Integer, nullable = False)
    weight = db.Column(db.Integer, nullable = False)
    notes = db.Column(db.Text, nullable = True)

    user = db.relationship('User', foreign_keys=userId)

    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "workoutId": self.workoutId,
        "title": self.title,
        "reps": self.reps,
        "sets": self.sets,
        "weight": self.weight,
        "notes": self.notes
        }
