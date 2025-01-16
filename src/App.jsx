import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './modules/public/routes/PublicRoutes';

export const App = () => {
  return (
    <>
       <BrowserRouter>
          <PublicRoutes />
       </BrowserRouter>
    </>
  );
}
