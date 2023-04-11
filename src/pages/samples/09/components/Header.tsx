import style from './header.module.scss'
import Link from 'next/link'
export function Header() {
    return (
        <>
            <header className={style.head}>
                <ul className={style.navbox}>
                    <li><Link href={'/'}>logo</Link></li>
                    <li>
                        <Link href={'/'}>jfjf</Link>
                        <ul>
                            <li>
                                <Link href={'/'}>aaa</Link>
                            </li>
                            <li>
                                <Link href={'/'}>iiii</Link>
                            </li>
                            <li>
                                <Link href={'/'}>uuuu</Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link href={'/'}>ldld</Link>
                        <ul>
                            <li>
                                <Link href={'/'}>eeee</Link>
                            </li>
                            <li>
                                <Link href={'/'}>oooo</Link>
                            </li>
                            <li>
                                <Link href={'/'}>kakaka</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href={'/'}>aaaa</Link>
                        <ul>
                            <li>
                                <Link href={'/'}>kikikiki</Link>
                            </li>
                            <li>
                                <Link href={'/'}>kukuku</Link>
                            </li>
                            <li>
                                <Link href={'/'}>keekekeke</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </header>
        </>
    )
}