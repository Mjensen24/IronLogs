from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Meal

class MealForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    calories = IntegerField('calories', validators=[DataRequired()])
    fat = IntegerField('fat', validators=[DataRequired()])
    carbs = IntegerField('carbs', validators=[DataRequired()])
    water = IntegerField('water', validators=[DataRequired()])
