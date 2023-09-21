import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';

const Root = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
