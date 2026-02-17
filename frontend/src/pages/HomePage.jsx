import MainLayout from "../components/layout/MainLayout";
import WelcomePanel from "../components/home/WelcomePanel";
import QRPanel from "../components/home/QRPanel";
import NavBar from "../components/common/NavBar";
import TopBar from "../components/common/TopBar";

export default function HomePage() {
  return (
    <MainLayout>
      <TopBar />

      <div className="flex h-full items-center justify-between px-20">
        {/* Welcome */}
        <div className="flex">
          <WelcomePanel />
        

        {/* QR */}
        <div className="flex right-10 bottom-32">
          <QRPanel />
        </div>
        </div>
      </div>

      <NavBar />
    </MainLayout>
  );
}
