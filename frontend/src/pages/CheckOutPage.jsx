import MainLayout from "../components/layout/MainLayout";
import CheckOutButton from "../components/common/CheckOutButton";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";
<HomeButton />
      
function CheckOutPage() {
  return (
    <MainLayout>
      <h1 className="p-6 text-2xl">CheckOutPage</h1>
      <div className="flex items-center justify-center h-screen">
        <CheckOutButton />
      </div>
      <HomeButton />
      <BackButton />
    </MainLayout>
  );
}

export default CheckOutPage;
