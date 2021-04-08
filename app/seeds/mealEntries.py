from app.models import db, MealEntry

# Adds a demo user, you can add other users here if you want
def seed_mealEntries():

    demo = MealEntry(userId="1", title="Had a heavy breakfast")
    db.session.add(demo)

    demo2 = MealEntry(userId="1", title="Skipped snacks today")
    db.session.add(demo2)

    demo3 = MealEntry(userId="1", title="No breakfast, was in a hurry")
    db.session.add(demo3)

    demo4 = MealEntry(userId="1", title="Tried a new chicken and pasta dish")
    db.session.add(demo4)

    demo5 = MealEntry(userId="1", title="Cheat day")
    db.session.add(demo5)

    demo6 = MealEntry(userId="1", title="Intermittent fasted this morning")
    db.session.add(demo6)

    demo7 = MealEntry(userId="1", title="Ate a little to much chocolate for a snack")
    db.session.add(demo7)

    demo8 = MealEntry(userId="1", title="Intermittent fastting again today!")
    db.session.add(demo8)

    demo9 = MealEntry(userId="1", title="Skipped breakfast")
    db.session.add(demo9)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_mealEntries():
    db.session.execute('TRUNCATE mealEntries;')
    db.session.commit()
