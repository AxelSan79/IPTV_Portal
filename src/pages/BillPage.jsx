import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";

function BillPage() {
  return (
    <SecondLayout>
      <h1 className="p-6 text-2xl">BillPage</h1>
      <HomeButton />
      <BackButton />
    </SecondLayout>
  );
}

export default BillPage;
