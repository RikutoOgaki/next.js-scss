import style from './name.module.scss'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'

export function Name() {
    return (
        <>
            <div className={style.Namewrap}>
                <p>Hello</p>
                <h1>Rikuto Ogaki</h1>
                <p>Web Front Enginer</p>
                <div className={style.iconbox}>
                    <Link href={'https://github.com/RikutoOgaki'}>
                        <SiGithub className={style.icon} />
                    </Link>
                    <Link href={''}>
                        <SiInstagram className={style.icon} />
                    </Link>
                    <Link href={''}>
                        <SiTwitter className={style.icon} />
                    </Link>
                </div>
            </div>
        </>
    )
}