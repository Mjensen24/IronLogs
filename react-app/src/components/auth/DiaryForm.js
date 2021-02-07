import React, { useState } from "react";
import { postEntry } from "../../services/auth";

const DiaryForm = ({ userId }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");


    const onEntry = async (e) => {
        e.preventDefault();
        await postEntry(userId, title, notes, date)
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateDate = (e) => {
        setDate(e.target.value);
    };

    const updateNotes = (e) => {
        setNotes(e.target.value);
    };

    return (
        <form onSubmit={onEntry}>
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
            <div>
                <label htmlFor="notes">notes</label>
                <input
                    name="notes"
                    type="text"
                    placeholder="notes"
                    value={notes}
                    onChange={updateNotes}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default DiaryForm;
