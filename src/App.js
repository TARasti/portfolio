import AppContext from './contexts/AppContexts';
import './css/App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AppContext>
      <HomePage />
    </AppContext>
  );
}

export default App;
