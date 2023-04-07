import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'/samples/01'}><li>sample01</li></Link>
          <Link href={'/samples/02'}><li>sample02</li></Link>
          <Link href={'/samples/03'}><li>sample03</li></Link>
        </ul>
      </div>
    </>
  )
}