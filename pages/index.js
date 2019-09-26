import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

 const Index = (props) => (
  <Layout>
    <h1>Welcome to BitzPrice!</h1>
    <p>Check current Bitcoin rates</p>
    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async () => {
  try {
    const res = await fetch('http://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
      bpi: data.bpi
    };
  } catch (err) {
    console.log(err);
  }
}

export default Index;