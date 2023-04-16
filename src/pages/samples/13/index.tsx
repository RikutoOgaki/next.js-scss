import { useState, useEffect } from 'react'
import style from './index.module.scss'

type State = {
    x: number,
    y: number
}

export default function Sample13() {

    const [state, setState] = useState<State>({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const MouseEvent = (e) => {
            setState({
                ...state,
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', MouseEvent)

        return () => {
            window.removeEventListener('mousemove', MouseEvent)
        }
    }, [])

    return (
        <>
            <div
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                className={style.box}></div>
            <div
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                className={style.box1}></div>
            <div
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                className={style.box2}></div>
            <div
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                className={style.box3}></div>
            <div
                style={{ transform: `translate(${state.x}px , ${state.y}px)` }}
                className={style.box4}></div>
        </>
    )
}