import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navigationsbar from "./components/Navigationsbar";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <Navigationsbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />{" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
