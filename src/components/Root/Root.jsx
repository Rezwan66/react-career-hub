import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';

const Root = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <div className="min-h-fit">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
