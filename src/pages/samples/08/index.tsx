import style from './index.module.scss'
import Link from 'next/link'
import Main from './components/MainContents'
import imgArray from '@/pages/libs/imgArray'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <h1>Hello World</h1>
            </header>
        </>
    )
}

export function Footer() {
    return (
        <>
            <footer className={style.foot}>
                <p><small>project &copy; html課題06</small></p>
            </footer>
        </>
    )
}

export function Navigation() {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.listbox}>
                    <Link href={'/'}>
                        <li>contents1</li>
                    </Link>
                    <Link href={'/'}>
                        <li>contents1</li>
                    </Link>
                    <Link href={'/'}>
                        <li>contents1</li>
                    </Link>
                    <Link href={'/'}>
                        <li>contents1</li>
                    </Link>
                    <Link href={'/'}>
                        <li>contents1</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default function Sample08() {

    const array = imgArray
    console.log(array);


    return (
        <>
            <div className={style.wrap}>
                <Header />
                <Navigation />
                <main className={style.main}>
                    <div className={style.box}>
                        {array.map((v) =>
                            <Main img={v.img} title={v.title} text={v.text} />
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}