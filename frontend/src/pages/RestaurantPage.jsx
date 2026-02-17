import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";
  
function RestaurantPage() {
  return (
    <SecondLayout>
      <h1 className="p-6 text-2xl">RestaurantPage</h1>
      <HomeButton />
      <BackButton />
    </SecondLayout>
  );
}

export default RestaurantPage;
