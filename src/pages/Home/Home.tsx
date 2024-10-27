import BoxBanner from "@/components/Banner/BoxBanner";
import CollabBanner from "@/components/Banner/CollabBanner";
import FirstBanner from "@/components/Banner/FirstBanner";
import SecondBanner from "@/components/Banner/SecondBanner";
import { Hero } from "@/components/Hero";
import Products from "@/components/Products/Products";
import Reviews from "@/components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <div className="bg-light-brown py-20">
        <Hero />
        Hi
      </div>
      <div className="border-b-2">
        <FirstBanner />
      </div>
      <div className=" flex items-center py-20">
        <SecondBanner />
      </div>
      <div className="bg-light-brown">
        <Products limit={4} />
      </div>
      <div className=" flex items-center py-20">
        <CollabBanner />
      </div>
      <div className=" flex items-center bg-light-brown  py-20">
        <Reviews />
      </div>
      <div className="flex items-center py-20">
        <BoxBanner />
      </div>
    </>
  );
};

export default Home;
