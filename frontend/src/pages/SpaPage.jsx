import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";

function SpaPage() {
  return (
    <SecondLayout>
      <h1 className="p-6 text-2xl">SpaPage</h1>
      <HomeButton />
      <BackButton />
    </SecondLayout>
  );
}

export default SpaPage;
