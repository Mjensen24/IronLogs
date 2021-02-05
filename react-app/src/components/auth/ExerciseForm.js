import React, { useEffect, useState } from "react";
import { get_userId, postExercise } from "../../services/auth";

const ExerciseForm = ({ userId }) => {
    const [userInfo, setUserInfo] = useState([])
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");
    const [weight, setWeight] = useState("");
    const [notes, setNotes] = useState("");



    useEffect(() => {
        (async () => {
            const user = await get_userId();
            setUserInfo(user)
        })();
    }, []);


    const onExercise = async (e) => {
        e.preventDefault();
        const exercise = await postExercise(userInfo.id, userInfo.id, title, reps, sets, weight, notes)
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateReps = (e) => {
        setReps(e.target.value);
    };

    const updateSets = (e) => {
        setSets(e.target.value);
    };

    const updateWeight = (e) => {
        setWeight(e.target.value);
    };

    const updateNotes = (e) => {
        setNotes(e.target.value);
    };

    return (
        <form onSubmit={onExercise}>
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
                <label htmlFor="reps">Reps</label>
                <input
                    name="reps"
                    type="number"
                    placeholder="reps"
                    value={reps}
                    onChange={updateReps}
                />
            </div>
            <div>
                <label htmlFor="sets">Sets</label>
                <input
                    name="sets"
                    type="number"
                    placeholder="sets"
                    value={sets}
                    onChange={updateSets}
                />
            </div>
            <div>
                <label htmlFor="weight">Weight</label>
                <input
                    name="weight"
                    type="number"
                    placeholder="weight"
                    value={weight}
                    onChange={updateWeight}
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

export default ExerciseForm;
