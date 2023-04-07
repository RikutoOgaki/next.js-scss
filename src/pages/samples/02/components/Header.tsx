import Link from 'next/link'
import style from './header.module.scss'

export function Header() {
    return (
        <>
            <header className={style.headerbox}>
                <nav>
                    <ul className={style.ul}>
                        <Link href={'/'}><li>logo</li></Link>
                        <Link href={'/'}><li>about</li></Link>
                        <Link href={'/'}><li>skill</li></Link>
                        <Link href={'/'}><li>works</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}