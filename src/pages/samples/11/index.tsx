import style from './index.module.scss'
import { Header } from './components/Header'

export default function Sample11() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
            </div>
        </>
    )
}