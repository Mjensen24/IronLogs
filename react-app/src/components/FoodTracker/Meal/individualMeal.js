import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { deleteMeal } from '../../../services/auth';

const IndividualMeal = ({ meal, setMeals }) => {

    const onDeleteMeal = async (e) => {
        e.preventDefault();
        await deleteMeal(meal.id);
        setMeals((currentMeals) => {
            // const exercise = [currentExercises.splice([...currentExercises].indexOf(deleted), currentExercises.length)]
            return (
                [...currentMeals]
                // [[...currentExercises].splice([...currentExercises].indexOf(deleted), 1)]
            )
        })
    }

    return (
        <div key={meal.id} className="meal-container">
            <div className="meal-data">
                <p className="meal-data_entry">{meal.title}</p>
                <p className="meal-data_entry">Calories: {meal.calories}</p>
                <p className="meal-data_entry">Fat: {meal.fat}</p>
                <p className="meal-data_entry">Carbs: {meal.carbs}</p>
                <p className="meal-data_entry">Water: {meal.water} oz.</p>
                <p className="meal-delete_button"><TiDeleteOutline onClick={onDeleteMeal} /></p>
            </div>
        </div>
    )
}

export default IndividualMeal;
