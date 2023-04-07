import Link from 'next/link'
import style from './header.module.scss'

export function Header() {
    return (
        <>
            <header className={style.headerbox}>
                <nav>
                    <ul className={style.ul}>
                        <Link href={'/'}><li>logo</li></Link>
                        <Link href={'/'}><li>商品</li></Link>
                        <Link href={'/'}><li>お問い合わせ</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}