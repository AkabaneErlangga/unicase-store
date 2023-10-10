import './App.css';
import ProductPage from './page/products';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './page/root';
import TablePage from './page/table';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
