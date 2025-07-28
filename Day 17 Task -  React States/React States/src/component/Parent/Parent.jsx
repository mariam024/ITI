import React, { useState } from 'react'
import Child from '../Child/child'

export default function Parent() {
    let [counter, setCounter] = useState(0)
    function Increase(param) {
        setCounter(counter + param)
    }

    return (
        <>
            <div className='text'>
                <h5>Hi from Parent</h5>
                <p>Parent Counter: {counter}</p>
                <button type="button" className="btn btn-warning" onClick={function () { Increase(2) }}>Increase</button>

                <Child data={counter} />
            </div>

        </>
    )
}
