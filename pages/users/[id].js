import {useRouter} from 'next/router';
import Layout from '../../Components/Layout/Layout';
import Title from '../../Components/Title/Title';

export default function UsersID(){
  const router = useRouter();
  console.log(router);
  const {id} = router.query;
  return(
    <Layout>
      <Title>Userr Details</Title>
      <p>User ID: {id} </p>
    </Layout>
  )
}