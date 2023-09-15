import Link from 'next/link'

export default function Index() {
    return (
        <>
            <ul>
                <Link href={'/practice/01'}><li>sample01</li></Link>
                <Link href={'/practice/02'}><li>sample02</li></Link>
                <Link href={'/practice/03'}><li>sample03</li></Link>
                <Link href={'/practice/04'}><li>sample04</li></Link>
                <Link href={'/practice/05'}><li>sample05</li></Link>
                <Link href={'/practice/06'}><li>sample06</li></Link>
            </ul>
        </>
    )
}