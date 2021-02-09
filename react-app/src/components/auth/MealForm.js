import React, { useState } from "react";
import { postMeal } from "../../services/auth";

const MealForm = ({ userId, mealEntryId }) => {
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [fat, setFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [water, setWater] = useState("");

    const onMeal = async (e) => {
        e.preventDefault();
        await postMeal(userId, mealEntryId, title, calories, fat, carbs, water)
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
        <form onSubmit={onMeal}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={updateTitle}
                />
            </div>
            <div>
                <label htmlFor="reps">calories</label>
                <input
                    name="calories"
                    type="number"
                    placeholder="calories"
                    value={calories}
                    onChange={updateCalories}
                />
            </div>
            <div>
                <label htmlFor="fat">fat</label>
                <input
                    name="fat"
                    type="number"
                    placeholder="fat"
                    value={fat}
                    onChange={updateFat}
                />
            </div>
            <div>
                <label htmlFor="carbs">carbs</label>
                <input
                    name="carbs"
                    type="number"
                    placeholder="carbs"
                    value={carbs}
                    onChange={updateCarbs}
                />
            </div>
            <div>
                <label htmlFor="water">water</label>
                <input
                    name="water"
                    type="text"
                    placeholder="water"
                    value={water}
                    onChange={updateWater}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MealForm;
