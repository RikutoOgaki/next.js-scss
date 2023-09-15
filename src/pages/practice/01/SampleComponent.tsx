import { useState } from 'react'

// Props => 小道具という意味
// 道具のものとして、memoは文字列とonStateは関数と定義している
type Props = {
    memo: string,
    onState: (v: string) => void
}

// Stateは使われる出力するものが文字列であると定義している
type State = {
    memo: string
}


export default function SampleComponent(props: Props) {

    const [state, setState] = useState<State>({
        memo: props.memo
    })

    return (
        <>
            <div>
                <p>子の内部状態</p>
                <input type="text" value={state.memo}
                    onChange={(e) => setState({
                        ...state,
                        memo: e.target.value
                    })}
                    onBlur={() => props.onState(state.memo)}
                />
            </div>
        </>
    )
}