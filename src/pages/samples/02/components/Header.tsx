import Link from 'next/link'
import './header,module.scss'

export function Header() {
    return (
        <>
            <header className='headerbox'>
                <nav>
                    <ul>
                        <Link href={'/'}><li></li></Link>
                        <Link href={'/'}><li></li></Link>
                        <Link href={'/'}><li></li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}