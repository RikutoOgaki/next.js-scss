import { useState, useEffect } from 'react'

function Dice() {
    return Math.floor(Math.random() * 6 + 1)
}



export default function Sample04() {

    const [state, setState] = useState(0)

    useEffect(() => {
        setState(Dice())
    }, [])


    return (
        <>
            <p>サイコロんの出目は{state}</p>
            <button onClick={() => setState(Dice())}>ふる</button>
        </>
    )
}