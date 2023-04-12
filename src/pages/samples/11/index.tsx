import style from './index.module.scss'
import { Header } from './components/Header'
import { MainBijual } from './components/MainBIjual'
import { Maincontents1 } from './components/Maincontents1'


export default function Sample11() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
                <main className={style.main}>
                    <MainBijual />
                    <Maincontents1 />
                </main>
            </div>
        </>
    )
}