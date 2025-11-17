import HeroSlider from "@/components/HeroSlider";
import Featured from "@/components/Featured";
import Trending from "@/components/Trending";
import NewArrivals from "@/components/NewArrivals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Featured />
      <Trending />
      <NewArrivals />
      <Footer />
    </main>
  );
}
