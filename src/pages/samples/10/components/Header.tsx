import style from './header.module.scss'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header>
                <div className={style.navbox}>
                    <div className={style.logo}>logo</div>
                    <div className={style.navChildbox}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={style.listbar}>
                    <li><Link href={'/'}>logo</Link></li>
                    <li><Link href={'/'}>商品</Link></li>
                    <li><Link href={'/'}>お問い合わせ</Link></li>
                    <li><Link href={'/'}>ご質問</Link></li>
                </ul>
            </header>
        </>
    )
}