import React, { useState } from "react";
import { postMeal } from "../../services/auth";

const MealForm = ({ userId, mealEntryId, setMeals }) => {
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [fat, setFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [water, setWater] = useState("");

    const clearMeal = () => {
        setTitle("")
        setCalories("")
        setFat("")
        setCarbs("")
        setWater("")
    }

    const onMeal = async (e) => {
        e.preventDefault();
        const meal = await postMeal(userId, mealEntryId, title, calories, fat, carbs, water)
        setMeals((currentMeals) => {
            return (
                [...currentMeals, meal]
            )
        })
        clearMeal()
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateCalories = (e) => {
        setCalories(e.target.value);
    };

    const updateFat = (e) => {
        setFat(e.target.value);
    };

    const updateCarbs = (e) => {
        setCarbs(e.target.value);
    };

    const updateWater = (e) => {
        setWater(e.target.value);
    };

    return (
        <div className="meal-form_container">
            <form className="meal-form" onSubmit={onMeal}>
                <div className="meal-title">
                    <label htmlFor="title"></label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        maxLength="20"
                        onChange={updateTitle}
                    />
                </div>
                <div className="input_container">
                    <div className="meal-inputs_left">
                        <label htmlFor="reps"></label>
                        <input
                            name="calories"
                            type="number"
                            placeholder="calories"
                            value={calories}
                            onChange={updateCalories}
                        />
                        <label htmlFor="fat"></label>
                        <input
                            name="fat"
                            type="number"
                            placeholder="fat"
                            value={fat}
                            onChange={updateFat}
                        />
                    </div>
                    <div className="meal-inputs_right">
                        <label htmlFor="carbs"></label>
                        <input
                            name="carbs"
                            type="number"
                            placeholder="carbs"
                            value={carbs}
                            onChange={updateCarbs}
                        />
                        <label htmlFor="water"></label>
                        <input
                            name="water"
                            type="text"
                            placeholder="water"
                            value={water}
                            onChange={updateWater}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MealForm;
