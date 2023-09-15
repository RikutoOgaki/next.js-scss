import { useState } from 'react'
import SampleComponent from './SampleComponent'

export default function Sample01() {

    const [state, setState] = useState({
        memo: 'XXXX'
    })

    return (
        <>
            <p>Sample01の親の状態={state.memo}</p>
            <SampleComponent memo={state.memo}
                onState={(v) => setState({
                    ...state,
                    memo: v
                })}
            />
        </>
    )
}