import React from 'react'

export default function child(pram) {
    return (
        <>
            <h5>Hi from Child</h5>
            <p>Child Counter: {pram.data}</p>
        </>
    )
}
