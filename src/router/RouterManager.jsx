import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from '../components/layout';
import GoTopButton from '../components/common/GoTopButton'



export default function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        {routes && routes.public.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Layout isNavInside={route.navbarInside ?? false}>
              <route.element />
            </Layout>
          } exec={route.isMain ?? false} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
