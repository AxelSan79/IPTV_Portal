import MainLayout from "../components/layout/MainLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";

function LiveTvPage() {
  return (
    <MainLayout>
      <h1 className="p-6 text-2xl">LiveTvPage</h1>
      <HomeButton />
      <BackButton />
    </MainLayout>
  );
}

export default LiveTvPage;
