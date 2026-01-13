import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assignments" element={<Assignments />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
