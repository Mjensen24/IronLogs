import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { get_userId, postWorkout } from "../../services/auth";

const WorkoutForm = ({ userId }) => {
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
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateDate = (e) => {
        setDate(e.target.value);
    };

    return (
        <form onSubmit={onWorkout}>
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
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default WorkoutForm;
