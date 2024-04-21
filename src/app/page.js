import Banner from "@/components/home/Banner";
import Best from "@/components/home/Best";
import BetterMonitize from "@/components/home/BetterMonitize";
import Monetize from "@/components/home/Monetize";
import SmartLink from "@/components/home/SmartLink";
import Video from "@/components/home/Video";
import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Banner />

      <Video />
      <Monetize />
      <BetterMonitize />
      <Best />
      <SmartLink />
    </>
  );
}

// style={{
//   background: `url("https://www.trafee.com/wp-content/themes/trafee/assets/images/bg.webp") top left / 68% 100% no-repeat`,
//   height: "100vh",
// }}
