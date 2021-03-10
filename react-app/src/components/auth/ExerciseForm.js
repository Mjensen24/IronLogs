import React, { useState } from "react";
import { postExercise } from "../../services/auth";

const ExerciseForm = ({ userId, workoutId, setExercises, onClose }) => {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");
    const [weight, setWeight] = useState("");
    const [notes, setNotes] = useState("");

    // const useInputState = (initialVal) => {
    //     const [value, setValue] = useState(initialVal);
    //     const handleChange = (e) => {
    //         setValue(e.target.value);
    //     };
    //     const reset = () => {
    //         setValue("");
    //     };
    //     return [value, handleChange, reset];
    // };

    const onExercise = async (e) => {
        e.preventDefault();
        const exercise = await postExercise(userId, workoutId, title, reps, sets, weight, notes)
        setExercises((currentExercise) => {
            return (
                [...currentExercise, exercise]
            )
        })
        onClose()
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
        <div className="exercise-form_container">
            <form className="exercise-form" onSubmit={onExercise}>
                <div className="form-title">
                    <label htmlFor="title"></label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={updateTitle}
                    />
                </div>
                <div className="form-nums">
                    <label htmlFor="reps"></label>
                    <input
                        name="reps"
                        type="number"
                        placeholder="reps"
                        value={reps}
                        onChange={updateReps}
                    />
                    <label htmlFor="sets"></label>
                    <input
                        name="sets"
                        type="number"
                        placeholder="sets"
                        value={sets}
                        onChange={updateSets}
                    />
                    <label htmlFor="weight"></label>
                    <input
                        name="weight"
                        type="number"
                        placeholder="weight"
                        value={weight}
                        onChange={updateWeight}
                    />
                </div>
                <div className="form-notes">
                    <label htmlFor="notes"></label>
                    <input
                        name="notes"
                        type="textbox"
                        placeholder="notes"
                        value={notes}
                        onChange={updateNotes}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExerciseForm;


// code to empty the form values after a submission
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// import { useState } from "react";
// const useInputState = (initialVal) => {
//     const [value, setValue] = useState(initialVal);
//     const handleChange = (e) => {
//         setValue(e.target.value);
//     };
//     const reset = () => {
//         setValue("");
//     };
//     return [value, handleChange, reset];
// };
// export default useInputState;
