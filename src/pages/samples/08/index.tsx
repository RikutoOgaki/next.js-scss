import style from './index.module.scss'

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

export default function Sample08() {
    return (
        <>
            <div className={style.wrap}>

            </div>
        </>
    )
}