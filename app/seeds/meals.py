from app.models import db, Meal

def seed_meals():

    demo = Meal(userId='1', mealEntryId='1', title="Breakfast", calories="900", fat="26", carbs="200", water="15")
    db.session.add(demo)

    demo2 = Meal(userId='1', mealEntryId='1', title="Lunch", calories="625", fat="12", carbs="90", water="10")
    db.session.add(demo2)

    demo3 = Meal(userId='1', mealEntryId='1', title="Snack", calories="200", fat="5", carbs="100", water="20")
    db.session.add(demo3)

    demo4 = Meal(userId='1', mealEntryId='1', title="Dinner", calories="850", fat="30", carbs="235", water="32")
    db.session.add(demo4)

    demo5 = Meal(userId='1', mealEntryId='2', title="Breakfast", calories="900", fat="26", carbs="200", water="15")
    db.session.add(demo5)

    demo6 = Meal(userId='1', mealEntryId='2', title="Lunch", calories="625", fat="12", carbs="90", water="10")
    db.session.add(demo6)

    demo7 = Meal(userId='1', mealEntryId='2', title="Dinner", calories="850", fat="30", carbs="235", water="32")
    db.session.add(demo7)

    demo8 = Meal(userId='1', mealEntryId='3', title="Lunch", calories="625", fat="12", carbs="90", water="10")
    db.session.add(demo8)

    demo9 = Meal(userId='1', mealEntryId='3', title="Snack", calories="200", fat="5", carbs="100", water="20")
    db.session.add(demo9)

    demo10 = Meal(userId='1', mealEntryId='3', title="Dinner", calories="850", fat="30", carbs="235", water="32")
    db.session.add(demo10)

    db.session.commit()

def undo_meals():
    db.session.execute('TRUNCATE exercises;')
    db.session.commit()
