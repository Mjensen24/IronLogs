import React, { useEffect, useState } from 'react'
import "./index.css"
import DiaryDrawer from '../DiaryDrawer';

import SoloEntry from './soloEntry/soloEntry';

const Diary = ({ userId }) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/diaryentries/${userId}`);
            const responseData = await response.json();
            setEntries(responseData.entries);
        }
        fetchData();
    }, [userId, entries]);

    return (
        <>
            <div className="mainpage-container">
                <h1>Diary</h1>
                <div className="entries_container">

                    {entries.map((entry) => {
                        return (
                            <SoloEntry key={entry.id} setEntries={setEntries} entry={entry} />
                        )
                    })}
                </div>
            </div>
            <div className="post-button">
                <DiaryDrawer setEntries={setEntries} userId={userId} />
            </div>
        </>
    )
}

export default Diary
