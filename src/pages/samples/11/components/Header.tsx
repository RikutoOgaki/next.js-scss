import Link from 'next/link'
import style from './header.module.scss'

export function Header() {
    return (
        <>
            <header className={style.head}>
                <div className={style.headbox}>
                    <div className={style.spanbox}>
                        <span>☆</span>
                        <span>SOUND VOLTEX</span>
                    </div>
                    <ul className={style.nav}>
                        <li><Link href={'/'}>大会概要</Link></li>
                        <li><Link href={'/'}>ルール説明</Link></li>
                        <li><Link href={'/'}>ご質問</Link></li>
                        <li><Link href={'/'}>お問い合わせ</Link></li>
                        <li><Link href={'/'}>エントリー</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}