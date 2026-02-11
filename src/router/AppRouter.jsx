import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import LiveTvPage from "../pages/LiveTvPage";
import VodPage from "../pages/VodPage";
import VodAssetPage from "../pages/VodAssetPage";
import VideoPlayerPage from "../pages/VideoPlayerPage";
import CastPage from "../pages/CastPage";
import LanguagePage from "../pages/LanguagePage";
import ServicesPage from "../pages/ServicesPage";
import InfoPage from "../pages/InfoPage";
import RestaurantPage from "../pages/RestaurantPage";
import SpaPage from "../pages/SpaPage";
import BillPage from "../pages/BillPage";
import WeatherPage from "../pages/WeatherPage";
import CheckOutPage from "../pages/CheckOutPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/TV" element={<ProtectedRoute><LiveTvPage /></ProtectedRoute>} />
      <Route path="/VoD" element={<ProtectedRoute><VodPage /></ProtectedRoute>} />
      <Route path="/VoD/:id" element={<ProtectedRoute><VodAssetPage /></ProtectedRoute>} />
      <Route path="/VoD/:id/watch" element={<ProtectedRoute><VideoPlayerPage /></ProtectedRoute>} />
      <Route path="/Cast" element={<ProtectedRoute><CastPage /></ProtectedRoute>} />
      <Route path="/Language" element={<ProtectedRoute><LanguagePage /></ProtectedRoute>} />
      <Route path="/Services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
      <Route path="/Services/HotelInfo" element={<ProtectedRoute><InfoPage /></ProtectedRoute>} />
      <Route path="/Services/Restaurant" element={<ProtectedRoute><RestaurantPage /></ProtectedRoute>} />
      <Route path="/Services/Spa" element={<ProtectedRoute><SpaPage /></ProtectedRoute>} />
      <Route path="/Services/Bill" element={<ProtectedRoute><BillPage /></ProtectedRoute>} />
      <Route path="/Services/Weather" element={<ProtectedRoute><WeatherPage /></ProtectedRoute>} />
      <Route path="/Check-Out" element={<ProtectedRoute><CheckOutPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default AppRouter;
