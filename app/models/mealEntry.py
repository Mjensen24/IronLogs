from .db import db

class MealEntry(db.Model):
    __tablename__ = 'mealEntries'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.DateTime(timezone=True), server_default=db.func.now())

    user = db.relationship('User', foreign_keys=userId)
    meals = db.relationship('Meal', foreign_keys='Meal.mealEntryId')


    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "date": self.date
        }
