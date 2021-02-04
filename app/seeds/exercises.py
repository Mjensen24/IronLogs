from app.models import db, Exercise

# Adds a demo user, you can add other users here if you want
def seed_exercises():

    demo = Exercise(workoutId="1", title="Chest Press", reps="10", sets="3", notes="I really like this exercise")
    db.session.add(demo)
    demo2 = Exercise(workoutId="1", title="Dumbbell Press ", reps="15", sets="4", notes="This one kind of hurt my shoulder")
    db.session.add(demo2)
    demo3 = Exercise(workoutId="1", title="Push ups ", reps="20", sets="5", notes="Burnt out by the 3rd set")
    db.session.add(demo3)

    test = Exercise(workoutId="2", title="Squats", reps="10", sets="3", notes="God I hate squats so much")
    db.session.add(test)
    test2 = Exercise(workoutId="2", title="Leg press", reps="10", sets="4", notes="I'm not even going to bothe talking about this")
    db.session.add(test2)
    test3 = Exercise(workoutId="2", title="Leg extensions", reps="20", sets="5", notes="Buuuuuuuuuuuuuurn")
    db.session.add(test3)
    test4 = Exercise(workoutId="2", title="Deadlifts", reps="5", sets="5", notes="How am I this strong?")
    db.session.add(test4)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_exercises():
    db.session.execute('TRUNCATE exercises;')
    db.session.commit()
