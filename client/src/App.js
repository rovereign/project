import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
