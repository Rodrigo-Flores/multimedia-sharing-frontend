import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@ms/components/theme-provider";
import Home from './pages/Home';
import './App.css';
import { Toaster } from 'sonner';


export default function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" theme="system" />
    </ThemeProvider>
  );
}
