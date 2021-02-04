from .db import db

class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key = True)
    workoutId = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    reps = db.Column(db.Integer, nullable = False)
    sets = db.Column(db.Integer, nullable = False)
    notes = db.Column(db.Text, nullable = True)


    def to_dict(self):
        return {
        "id": self.id,
        "workoutId": self.workoutId,
        "title": self.title,
        "reps": self.reps,
        "sets": self.sets,
        "notes": self.notes
        }
