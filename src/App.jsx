import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TrendingNow from "./pages/TrendingNow";
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<TrendingNow />} />
        </Routes>

      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;
