import Banner from "@/components/home/Banner";
import Best from "@/components/home/Best";
import BetterMonitize from "@/components/home/BetterMonitize";
import Monetize from "@/components/home/Monetize";
import Video from "@/components/home/Video";
import Navbar from "@/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div
        style={{
          background: `url("https://www.trafee.com/wp-content/themes/trafee/assets/images/bg.webp") top left / 68% 100% no-repeat`,
          height: "100vh",
        }}
        className=""
      >
        <Navbar />
        <Banner />
      </div>
      <Video />
      <Monetize />
      <BetterMonitize />
      <Best />
    </div>
  );
}
