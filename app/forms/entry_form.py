from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import DiaryEntry


# def user_exists(form, field):
#     print("Checking if user exits", field.data)
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError("User is already registered.")


class DiaryForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    notes = StringField('notes', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
