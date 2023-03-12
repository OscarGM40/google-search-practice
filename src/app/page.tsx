import HomeSearch from "@/components/HomeSearch";
import HomeHeader from "@/components/HomeHeader";
import { NextPage } from "next";
import Image from "next/image";


const getRandomImage = () => {
  const rnd = Math.floor(Math.random() * 2);
  return rnd === 1 ? "/images/google-logo.png" : "/images/google-logo-2.png";
};

// recuerda que una Page en Next debe usar una export default
const page: NextPage = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        {/* Image de NextJS optimiza las imagenes tmb,por ejemplo en movil las baja un poco la calidad */}
        <Image width={300} height={300} src={getRandomImage()} alt="google-search-logo" />
      </div>
      <HomeSearch />
    </>
  );
};
export default page;
