import {useRouter} from 'next/router';
import Layout from '../../Components/Layout/Layout';
import Title from '../../Components/Title/Title';

export default function PostsID(){
  const router = useRouter();
  // console.log(router)
 const {id} = router.query;
  return(
    <Layout>
      <Title>Posts Details</Title>
      <p>Posts Id {id}</p>
    </Layout>
  )
}