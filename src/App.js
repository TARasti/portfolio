import AppContext from './contexts/AppContexts';
import './css/App.css';
import router from './utilities/Router.jsx';
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
