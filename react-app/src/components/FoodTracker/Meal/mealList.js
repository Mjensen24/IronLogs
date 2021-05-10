import React from "react";
import IndividualMeal from "./individualMeal";

const MealList = ({ entry, meals, setMeals }) => {
    return (
        <div>
            {
                meals.map((meal) => {
                    if (meal.mealEntryId === entry.id) {
                        return (
                            <IndividualMeal key={meal.id} meal={meal} setMeals={setMeals} />
                        )
                    }
                    return null;
                })
            }

        </div>
    )
}

export default MealList;
