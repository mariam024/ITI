import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'

export default function Home() {
    let [counter, setCounter] = useState(0)

    let [names, setNames] = useState(["Mariam", "Mohammed", "Abdelrahim"])
    // let newNames = names.map((names) => names)

    function Increase(param) {
        setCounter(counter + param)
        setNames([...names, counter + param])
    }


    return (
        <>
            <NavBar />
            <Hero />
            <div className="one">
                <h4>Counter: {counter}</h4>
                <button type="button" className="btn btn-secondary" onClick={function () { Increase(1) }}>Count</button>

                <ul>
                    {names.map((names) => <li>{names}</li>)}
                </ul>

            </div>
        </>
    )
}
