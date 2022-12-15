import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MemesPage from "./pages/MemesPage";
import Page404 from "./pages/Page404";
import { useAppSelector } from "./hooks/redux-hooks";

function App() {
  // Global State
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLogged && (
          <Route path="login" element={<Navigate to="/" replace />} />
        )}
        <Route path="login" element={<LoginPage />} />
        <Route path="memes" element={<MemesPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
