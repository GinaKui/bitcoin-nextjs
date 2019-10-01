import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Head>
    <Navbar />
    <main className="container">
      {props.children}
    </main>
  </React.Fragment>
);

export default Layout;