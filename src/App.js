import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages/Pages";
import Page from "./pages/Page/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/page/:pageNum' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
