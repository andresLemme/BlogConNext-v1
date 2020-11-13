import Layout from "../Components/Layout/Layout";
import Title from "../Components/Title/Title";

export default function Home() {
  return (
    <Layout>
      <Title>Home Page</Title>
      <p>Practicando con Next js</p>
      <style jsx>
        {`
        p{
          color: darkgray;
          cursor: pointer;
        }
        p:hover{
          color: darkred;
        }
        `}
      </style>
    </Layout>
  );
}
