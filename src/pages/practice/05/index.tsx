import { useState } from 'react'
import style from './index.module.scss'



export default function Sample05() {

    const [state, setState] = useState(false)

    return (
        <>
            <div>
                <p className={state ? style.red : style.blue}>下のボタンを押すと色が変わるよ！</p>
                <button onClick={() => setState(!state)}>Click</button>
            </div>
        </>
    )
}