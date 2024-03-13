import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<LandingPage />} />
            </Routes>
          </div>

        </>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
