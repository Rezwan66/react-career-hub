import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';

const Root = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <HeaderNav></HeaderNav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
