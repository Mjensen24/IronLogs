import React, { useEffect, useState } from "react";
import { get_userId, postWorkout } from "../../services/auth";

const WorkoutForm = ({ userId, setWorkouts, onClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {
        (async () => {
            const user = await get_userId();
            setUserInfo(user)
        })();
    }, []);


    const onWorkout = async (e) => {
        e.preventDefault();
        const workout = await postWorkout(userInfo.id, title, date)
        setWorkouts((currentWorkouts) => {
            return (
                [...currentWorkouts, workout]
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
        <form className="workout-form" onSubmit={onWorkout}>
            <div>
                <h1>hei</h1>
                <label className="workout-form_input" htmlFor="title"></label>
                <input
                    name="title"
                    type="text"
                    placeholder="Workout Title"
                    value={title}
                    maxLength="40"
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
                    onChange={updateDate}
                />
            </div>
            <button className="workout-form_input" type="submit">Submit</button>
        </form>
    )
}

export default WorkoutForm;
