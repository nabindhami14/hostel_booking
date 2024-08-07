import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Bookings from "./pages/bookings/Bookings";
import Hostels from "./pages/hostels/Hostels";
import Hostel from "./pages/hostels/Hostel";

import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";

import RegisterPage from "./pages/auth/register-page";
import LoginPage from "./pages/auth/login-page";
import NewHostel from "./pages/admin/new-hostel";
import { useCoordinates } from "./hooks/use-coordinates";
import { useEffect, useState } from "react";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeCoordinates = useCoordinates(
    (state) => state?.initializeCoordinates
  );
  const coordinates = useCoordinates((state) => state?.coordinates);

  useEffect(() => {
    if (!isInitialized && coordinates === null) {
      initializeCoordinates();
      setIsInitialized(true);
    }
  }, [initializeCoordinates, isInitialized, coordinates]);

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
            <Route path=":hostelId" element={<Hostel />} />
          </Route>
          <Route path="/admin">
            <Route path="new-hostel" element={<NewHostel />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
