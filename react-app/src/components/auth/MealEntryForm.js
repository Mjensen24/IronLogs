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
        <form onSubmit={onMealEntry}>
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
                <label htmlFor="date">Date</label>
                <input
                    name="date"
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={updateDate}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MealEntryForm;
