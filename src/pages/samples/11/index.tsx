import style from './index.module.scss'
import { Header } from './components/Header'
import { MainBijual } from './components/MainBIjual'


export default function Sample11() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
                <main className={style.main}>
                    <MainBijual />
                </main>
            </div>
        </>
    )
}