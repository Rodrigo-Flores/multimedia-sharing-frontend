import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import Home from './pages/Home'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
