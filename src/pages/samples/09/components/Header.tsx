import style from './header.module.scss'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <ul className={style.navbox}>
                    <Link href={'/'}>
                        <li>logo</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Food</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Drink</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Outdor</li>
                    </Link>
                </ul>
            </header>
        </>
    )
}