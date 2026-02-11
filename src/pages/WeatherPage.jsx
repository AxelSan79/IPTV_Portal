import MainLayout from "../components/layout/MainLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";

function WeatherPage() {
  return (
    <MainLayout>
      <h1 className="p-6 text-2xl">WeatherPage</h1>
      <HomeButton />
      <BackButton />
    </MainLayout>
  );
}

export default WeatherPage;
