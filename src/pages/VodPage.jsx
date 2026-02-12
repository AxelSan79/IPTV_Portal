import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import VodGrid from "../components/vod/VodGrid";
import TopBar from "../components/common/TopBar";

function VodPage() {    
  const movies = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    poster: `/images/poster-${i + 1}.jpg`
    
  }));
  
  return (
    <SecondLayout>
      <TopBar title="Video on Demand" />
      <HomeButton />
      <div className="relative top-12 z-10 h-full w-full p-10 flex flex-col items-center">
      <div className="flex-1 flex justify-center items-start">
          <VodGrid movies={movies} />
        </div>
      </div>
    </SecondLayout>
  );
}

export default VodPage;
