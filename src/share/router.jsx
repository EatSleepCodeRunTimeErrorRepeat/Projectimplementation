import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from '../pages/Home';
// import User from '../pages/User';
// import Manga from '../pages/Manga';
// import Community from '../pages/Community';
// import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '*', element: <Layout /> },
      
    ],
  },
]);

export default router;