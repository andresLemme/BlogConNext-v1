import Link from 'next/Link';

export default function Navbar(){
  return(
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/users'>Users</Link>
      <Link href='/posts'>Posts</Link>
      {/* <Link href='/users/[id]' as={`/users/${5}`}>RutaDinamica</Link>
      <Link href='/posts/[id]' as={`/posts/${"prueba"}`}>RutaDinamica</Link> */}
    </nav>
  )
}