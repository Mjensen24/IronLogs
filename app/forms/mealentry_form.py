from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import DiaryEntry

class FoodForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
