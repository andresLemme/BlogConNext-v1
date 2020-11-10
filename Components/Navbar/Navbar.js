import Link from "next/Link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
      
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <style jsx>
        {`
          nav {
            padding-top: 15px;
          }
          a {
            padding: 0 10px;
          }
        `}
      </style>
      {/* <Link href='/users/[id]' as={`/users/${5}`}>RutaDinamica</Link>
      <Link href='/posts/[id]' as={`/posts/${"prueba"}`}>RutaDinamica</Link> */}
    </nav>
  );
}
