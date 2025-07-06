import Layout from "./Layout"
import HomePage from './Pages/HomePage';
import CardsPage from './Pages/CardsPage';
import NotFoundPage from './Pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
