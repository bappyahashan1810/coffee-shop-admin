
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import AddCoffee from './Components/AddCoffee/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee';

import ViewCoffee from './Components/ViewCoffee/ViewCoffee';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: '/updatecoffee',
          element: <UpdateCoffee></UpdateCoffee>
        },
        {
          path: '/viewcoffee',
          element: <ViewCoffee></ViewCoffee>,
          loader: () => fetch('http://localhost:5000/coffee')
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
