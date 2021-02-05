from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Workout, Exercise


class ExerciseForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    reps = IntegerField('reps', validators=[DataRequired()])
    sets = IntegerField('sets', validators=[DataRequired()])
    weight = IntegerField('weight', validators=[DataRequired()])
    notes = StringField('notes')
