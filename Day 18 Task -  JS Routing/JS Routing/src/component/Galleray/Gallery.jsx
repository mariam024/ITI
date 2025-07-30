import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";


export default function Gallery() {
    let [counter, setCounter] = useState(0);
    let [userName, setUserName] = useState("Mariam");

    console.log("Render...");

    useEffect(() => {
        console.log("Mounting...");
    }, []);

    useEffect(() => {
        if (counter === 0) {
            return;
        }
        console.log("Update phase for counter...");
    }, [counter]);

    useEffect(() => {
        if (userName === "Mariam") {
            return;
        }
        console.log("Update phase for userName...");
    }, [userName]);

    useEffect(() => {
        if (counter === 0 && userName === "Mariam") {
            return;
        }
        console.log("Update phase...");
    }, [counter, userName]);

    useEffect(() => {
        return () => {
            console.log("Unmounting");

        }
    }, []);

    // useEffect(() => {
    //     console.log("Mounting");
    //     let clr = setInterval(() => {
    //         console.log("Interval Fired");
    //     }, 500)
    // });

    // useEffect(() => {
    //     return () => {
    //         console.log("Unmounting");
    //         clearInterval(clr);
    //     }
    // }, []);

    function changeCounter() {
        setCounter(counter + 1);
    }

    function changeUserName() {
        setUserName("Mohammed");
    }

    return (
        <>
            <Outlet />
            <div>
                <h2>Counter: {counter}</h2>
                <h3>Name: {userName}</h3>
                <button className='btn btn-primary' onClick={changeCounter}>Increase</button>
                <button className='btn btn-primary' onClick={changeUserName}>Change Name</button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to={'cats'}>Cats</Link>
                    </li>
                    <li>
                        <Link to={'dogs'}>Dogs</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
