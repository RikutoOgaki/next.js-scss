import style from './header.module.scss'
import Link from 'next/link'
import MediaQuery from 'react-responsive'

export function Headerbox() {
    return (
        <div className={style.navbox}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export function Headerbar() {
    return (
        <div className={style.listbox}>
            <ul className={style.nav}>
                <Link href={'/'}>
                    <li>logo</li>
                </Link>
                <Link href={'/'}>
                    <li>about</li>
                </Link>
                <Link href={'/'}>
                    <li>skill</li>
                </Link>
                <Link href={'/'}>
                    <li>works</li>
                </Link>
                <Link href={'/'}>
                    <li>example</li>
                </Link>
            </ul>
        </div>
    )
}

export function Header() {
    return (
        <>
            <header className={style.head}>
                <MediaQuery query='(max-width:412px)'>
                    <Headerbox />
                </MediaQuery>
                <MediaQuery query='(min-width:412px)'>
                    <Headerbar />
                </MediaQuery>
            </header>
        </>
    )
}