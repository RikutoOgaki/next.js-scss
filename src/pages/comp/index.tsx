import Link from 'next/link'

export default function ComponentIndex() {
    return (
        <>
            <ul>
                <Link href={'/comp/01'}><li>SampleComponent01</li></Link>
                <Link href={'./02'}><li>SampleComponent02</li></Link>
            </ul>
        </>
    )
}