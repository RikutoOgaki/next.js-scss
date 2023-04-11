import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import style from './index.module.scss'

export default function Sample08() {
    return (
        <>
            <div className={style.wrap}>
                <Header />
                <Footer />
            </div>
        </>
    )
}