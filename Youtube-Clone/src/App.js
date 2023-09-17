import './App.css';
import Head from './components/Head.js';
import Body from './components/Body.js';
import store from './utils/store'
import {Provider} from 'react-redux'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Maincontainer/>,
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter}></RouterProvider>
        
      </div>
    </Provider>
  );
}

export default App;
