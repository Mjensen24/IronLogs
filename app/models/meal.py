from .db import db

class Meal(db.Model):
    __tablename__ = 'meals'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    mealEntryId = db.Column(db.Integer, db.ForeignKey('mealEntries.id'), nullable=False)
    title = db.Column(db.Text, nullable=False)
    calories = db.Column(db.Integer, nullable=True)
    fat = db.Column(db.Integer, nullable=True)
    carbs = db.Column(db.Integer, nullable=True)
    water = db.Column(db.Integer, nullable=True)

    user = db.relationship('User', foreign_keys=userId)


    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "mealEntryId": self.mealEntryId,
        "title": self.title,
        "calories": self.calories,
        "fat": self.fat,
        "carbs": self.carbs,
        "water": self.water
        }
