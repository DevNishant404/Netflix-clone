import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCard";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative">
        <img className="w-full" id="hero-banner" src={heroBanner} alt="" />
        <div className="absolute px-0 lg:px-10 w-[100%] bottom-0  z-20">
          <img className="w-[40%] sm:block hidden lg:w-[90%] max-w-[420px] mb-8 lg:mx-0 mx-3" src={heroTitle} alt="" />
          <p className=" max-w-[400px] lg:max-w-[600px] text-[12px] lg:text-[17px] mb-4 sm:mb-12 lg:mx-0 mx-3 overflow-hidden ">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex gap-1 rounded font-medium items-center bg-white hover:bg-darkWhite px-4 text-black py-1 lg:mx-0 mx-3 mb-1 sm:mb-10 lg:mb-0">
              <img className="w-5" src={playIcon} alt="" />
              Play
            </button>
            <button className="flex gap-1 font-medium rounded items-center hover:bg-thinkWhite text-white bg-lightWhite py-1 px-4 mb-1 sm:mb-10 lg:mb-0 lg:mx-0 mx-3">
              <img className="w-5" src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <div className="lg:block hidden">
          <TitleCard></TitleCard>

          </div>
        </div>
      </div>
      <div className="px-3 lg:px-10">
        <TitleCard
          title={"Blockbuster Movies"}
          category={"top_rated"}
        ></TitleCard>
        <TitleCard title={"Only on Netflix"} category={"popular"}></TitleCard>
        <TitleCard title={"Upcoming"} category={"upcoming"}></TitleCard>
        <TitleCard
          title={"Top pics from You"}
          category={"now_playing"}
        ></TitleCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
