import {useRouter} from 'next/router';
import Layout from '../../Components/Layout/Layout';

export default function PostsID(){
  const router = useRouter();
  // console.log(router)
 const {id} = router.query;
  return(
    <Layout>
      <h1>Posts Details</h1>
      <p>Posts Id {id}</p>
    </Layout>
  )
}