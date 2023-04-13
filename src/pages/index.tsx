import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'/samples/01'}><li>sample01</li></Link>
          <Link href={'/samples/02'}><li>sample02</li></Link>
          <Link href={'/samples/03'}><li>sample03</li></Link>
          <Link href={'/samples/04'}><li>sample04</li></Link>
          <Link href={'/samples/05'}><li>sample05</li></Link>
          <Link href={'/samples/06'}><li>sample06</li></Link>
          <Link href={'/samples/07'}><li>sample07</li></Link>
          <Link href={'/samples/08'}><li>sample08</li></Link>
          <Link href={'/samples/09'}><li>sample09</li></Link>
          <Link href={'/samples/10'}><li>Sample10</li></Link>
          <Link href={'/samples/11'}><li>Sample11</li></Link>
          <Link href={'/samples/12'}><li>Sample12</li></Link>
        </ul>
      </div >
    </>
  )
}