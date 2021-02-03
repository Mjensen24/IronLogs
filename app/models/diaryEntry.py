from .db import db

class DiaryEntry(db.Model):
    __tablename__ = 'diaryEntries'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.Text, nullable = False)
    notes = db.Column(db.Text, nullable = False)
    date = db.Column(db.DateTime(timezone=True), server_default=db.func.now())

    user = db.relationship('User', foreign_keys=userId)
