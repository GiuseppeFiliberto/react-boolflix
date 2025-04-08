import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrendingNow from "./pages/TrendingNow";
import { GlobalProvider } from './context/GlobalContext';
import DefaultLayouts from "./Layouts/DefaultLayouts";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>


        <Routes>
          <Route Component={DefaultLayouts}>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<TrendingNow />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;
