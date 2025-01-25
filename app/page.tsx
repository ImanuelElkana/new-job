import Banner from "@/components/banner";
import Content1 from "@/components/content1";
import Footer from "@/components/footer";
import MovingText from "@/components/movingText";
import TopMenu from "@/components/topmenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-custom-gradient h-screen flex items-center justify-center">
        <Image src={'/asset/background.png'} alt="background" fill />
      </div>
      <TopMenu />
      <div className="-mt-[92vh] h-[92vh]">
        <div className="container mx-auto px-5 lg:grid grid-cols-2 gap-3">
          <Content1 />
          <Banner />
        </div>
        <MovingText />
      </div>
        <Footer />
    </>
  );
}
