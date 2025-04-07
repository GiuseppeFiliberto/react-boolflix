import Home from './pages/Home';
import { GlobalProvider } from './context/GlobalContext';

export default function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}
