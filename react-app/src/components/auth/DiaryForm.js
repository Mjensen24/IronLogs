import React, { useState } from "react";
import { postEntry } from "../../services/auth";

const DiaryForm = ({ userId, setEntries, onClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");


    const onEntry = async (e) => {
        e.preventDefault();
        const entry = await postEntry(userId, title, notes, date)
        setEntries((currentEntries) => {
            return (
                [...currentEntries, entry]
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

    const updateNotes = (e) => {
        setNotes(e.target.value);
    };

    return (
        <form className="workout-form" onSubmit={onEntry}>
            <div>
                <label className="workout-form_input" htmlFor="title"></label>
                <input
                    name="title"
                    type="text"
                    placeholder="Entry Title"
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
            <div>
                <label className="workout-form_input" htmlFor="notes"></label>
                <textarea
                    className="textarea"
                    name="notes"
                    type="text"
                    placeholder="Fill your Diary with notes from your workout, about your diet, or even just how you're feeling that day!"
                    value={notes}
                    maxLength="1150"
                    onChange={updateNotes}
                />
            </div>
            <button className="workout-form_input" type="submit">Submit</button>
        </form>
    )
}

export default DiaryForm;
