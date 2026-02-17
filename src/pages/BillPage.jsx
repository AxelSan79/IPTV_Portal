import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";
import TopBar from "../components/common/TopBar";
import Invoice from "../components/invoice/Invoice";
import { useTranslation } from "react-i18next";

function BillPage() {
  const { t } = useTranslation();
  return (
    <SecondLayout>
      <TopBar title={t("bill.previewTitle")} />
      <div className="p-10">
        <Invoice mode="preview" />
      </div>
      <HomeButton />
      <BackButton />
    </SecondLayout>
  );
}

export default BillPage;
