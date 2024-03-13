import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <>
      <div className="container">
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
      </div>
      </>
    </BrowserRouter>
  )
}

export default App
