from app.models import db, Workout

# Adds a demo user, you can add other users here if you want
def seed_workouts():

    demo = Workout(userId="1", title="Chest Day")
    db.session.add(demo)

    demo2 = Workout(userId="1", title="Leg Day")
    db.session.add(demo2)

    demo3 = Workout(userId="1", title="Arm Day")
    db.session.add(demo3)

    demo4 = Workout(userId="1", title="Shoulder Day")
    db.session.add(demo4)

    demo5 = Workout(userId="1", title="Back Day")
    db.session.add(demo5)

    demo6 = Workout(userId="1", title="Cardio")
    db.session.add(demo6)

    demo7 = Workout(userId="1", title="Chest")
    db.session.add(demo7)

    demo8 = Workout(userId="1", title="Back")
    db.session.add(demo8)

    demo9 = Workout(userId="1", title="Legs")
    db.session.add(demo9)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_workouts():
    db.session.execute('TRUNCATE workouts;')
    db.session.commit()
