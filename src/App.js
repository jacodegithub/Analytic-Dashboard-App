// import logo from './logo.svg';
import './App.css';
import { Card } from './pages/card/Card';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Home } from './pages/home/Home';
import { Table } from './pages/table/Table';
import { Chart } from './pages/chart/Chart';
import { Navbar } from './component/navbar/Navbar';
import { Footer } from './component/footer/Footer';
import { Menu } from './component/menu/Menu';
import './styles/globle.css'



function App() {

  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/table",
          element: <Table />
        },
        {
          path: "/chart",
          element: <Chart />
        },
        {
          path: "/card",
          element: <Card />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
