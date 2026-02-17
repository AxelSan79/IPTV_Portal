import MainLayout from "../components/layout/MainLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";

function CastPage() {
  return (
    <MainLayout>
      <h1 className="p-6 text-2xl">CastPage</h1>
      <HomeButton />
      <BackButton />
    </MainLayout>
  );
}

export default CastPage;
