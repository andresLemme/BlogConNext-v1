import {useRouter} from 'next/router';
import Layout from '../../Components/Layout/Layout';

export default function UsersID(){
  const router = useRouter();
  console.log(router);
  const {id} = router.query;
  return(
    <Layout>
      <h1>Userr Details</h1>
      <p>User ID: {id} </p>
    </Layout>
  )
}