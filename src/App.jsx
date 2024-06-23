import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Bookings from "./pages/bookings/Bookings";
import Hostels from "./pages/hostels/Hostels";
import Hostel from "./pages/hostels/Hostel";

import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";

import RegisterPage from "./pages/auth/register-page";
import LoginPage from "./pages/auth/login-page";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />

          <Route path="/hostels">
            <Route path="" element={<Hostels />} />
            <Route path=":hostel" element={<Hostel />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
