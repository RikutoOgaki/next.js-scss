import { useState } from 'react'

type Props = {
    message: string
}

function Test(props: Props = { message: 'initial value' }) {
    return (
        <div>{props.message}</div>
    )
}

export default function Sample02() {

    const [state, setState] = useState(0)

    return (
        <>
            <p>sample02</p>

            <Test message='Hello' />
        </>
    )
}