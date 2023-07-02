import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Layout = () => {
  return (
    <body className='d-flex flex-column' style={{height:'100%'}}>
      <header>
        <Header/>
      </header>
      <Outlet/>
      <footer className='mt-auto'>
        <Footer/>
      </footer>
    </body>
);
}

export default Layout