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

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/TV" element={<LiveTvPage />} />
      <Route path="/VoD" element={<VodPage />} />
      <Route path="/VoD/:id" element={<VodAssetPage />} />
      <Route path="/VoD/:id/watch" element={<VideoPlayerPage />} />
      <Route path="/Cast" element={<CastPage />} />
      <Route path="/Language" element={<LanguagePage />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/Services/HotelInfo" element={<InfoPage />} />
      <Route path="/Services/Restaurant" element={<RestaurantPage />} />
      <Route path="/Services/Spa" element={<SpaPage />} />
      <Route path="/Services/Bill" element={<BillPage />} />
      <Route path="/Services/Weather" element={<WeatherPage />} />
      <Route path="/Check-Out" element={<CheckOutPage />} />
    </Routes>
  );
}

export default AppRouter;
