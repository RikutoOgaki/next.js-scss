import { useState } from 'react'

export default function Sample03() {

    const [state, setState] = useState(0)

    return (
        <>
            <p>{state}</p>
            <button onClick={() => setState(state + 1)}>UP</button>
            <button onClick={() => setState(state - 1)}>DOWN</button>
        </>
    )
}