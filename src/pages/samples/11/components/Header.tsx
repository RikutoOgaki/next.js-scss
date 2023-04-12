import Link from 'next/link'
import style from './header.module.scss'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <div className={style.headbox}>
                    <span>☆</span>
                    <span>SOUND VOLTEX</span>
                    <ul className={style.nav}>
                        <li><Link href={'/'}></Link></li>
                        <li><Link href={'/'}></Link></li>
                        <li><Link href={'/'}></Link></li>
                        <li><Link href={'/'}></Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}