import { getRandomImage } from "@/helpers/getRandomImage";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
// obviamente es una named import porque de react-icons/ri solo pueden salir imports modularizados
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

// este header tiene dos filas
const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      {/* fila superior(4 columnas) */}
      <div className="flex w-full p-6 items-center justify-between ">
        {/* col 1 */}
        <Link href="/">
          <Image width="120" height="40" alt="search pages logo" src={getRandomImage()} />
        </Link>
        {/* col 2 */}
        <div className="flex-1 mx-5 md:mx-8 lg:mx-10">
          <SearchBox />
        </div>
        {/* col 3 */}
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        {/* col 4 ? */}
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
      {/* fila inferior */}
      <SearchHeaderOptions />
    </header>
  );
};
export default SearchHeader;
