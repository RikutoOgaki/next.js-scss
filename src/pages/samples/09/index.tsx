import { Header } from './components/Header'
import { Bijual } from './components/Bijual'
import style from './index.module.scss'

export default function Sample09() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
                <Bijual />
            </div>
        </>
    )
}