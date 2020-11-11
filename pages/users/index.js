import Link from "next/Link";
import Layout from "../../Components/Layout/Layout";
import Navbar from "../../Components/Navbar/Navbar";

export default function Users({ users }) {
  return (
    <Layout>
      <h1>Users Page</h1>
      <div>
        {users.map((user, key) => {
          return (
            <Link href={'/users/[id]'} as={`/users/${user.id}`} key={key.id}>
              <a className='card'>
                <h3>User: {user.username}</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users: users
    },
  };
}

