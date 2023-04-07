import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'/samples/01'}><li>sample01</li></Link>
        </ul>
      </div>
    </>
  )
}