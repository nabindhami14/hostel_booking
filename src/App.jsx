import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Bookings from "./pages/bookings/Bookings";
import Hostels from "./pages/hostels/Hostels";
import Hostel from "./pages/hostels/Hostel";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />

        <Route path="/hostels">
          <Route path="" element={<Hostels />} />
          <Route path=":hostel" element={<Hostel />} />
        </Route>

        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
