import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMovie from "./pages/SearchMovie";
import Home from "./pages/Home";
import { GlobalProvider } from './context/GlobalContext';
import DefaultLayouts from "./Layouts/DefaultLayouts";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>


        <Routes>
          <Route Component={DefaultLayouts}>
            <Route path="/" element={<Home />} />
            <Route path="/searchmovie" element={<SearchMovie />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </GlobalProvider>
  );
}

export default App;
