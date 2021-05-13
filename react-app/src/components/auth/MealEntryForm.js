import React, { useState } from "react";
import { postMealEntry } from "../../services/auth";

const MealEntryForm = ({ userId, setMealEntries, onClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const onMealEntry = async (e) => {
        e.preventDefault();
        const mealEntry = await postMealEntry(userId.id, title, date)
        setMealEntries((currentEntries) => {
            return (
                [...currentEntries, mealEntry]
            )
        })
        onClose()
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateDate = (e) => {
        setDate(e.target.value);
    };

    return (
        <form className="workout-form" onSubmit={onMealEntry}>
            <div>
                <label className="workout-form_input" htmlFor="title"></label>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    maxLength="35"
                    onChange={updateTitle}
                />
            </div>
            <div>
                <label className="workout-form_input" htmlFor="date"></label>
                <input
                    name="date"
                    type="date"
                    placeholder="Date"
                    value={date}
                    maxLength="11"
                    max="11"
                    onChange={updateDate}
                />
            </div>
            <button className="workout-form_input" type="submit">Submit</button>
        </form>
    )
}

export default MealEntryForm;
