import './assets/css/style.css';
import Main from './components/Main'
import { GlobalProvider } from './components/context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
