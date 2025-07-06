import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';

function Layout() {
  return(
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;