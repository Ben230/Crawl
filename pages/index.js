import Link from 'next/link';
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <div>
    <Link href="/map">
      <a>Find Pubs Near Me</a>
    </Link>
    </div>
  </Layout>
)


export default Index;
