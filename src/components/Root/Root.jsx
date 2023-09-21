import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <div>Hello world!</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
