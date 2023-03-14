import Link from "next/link";
// fijate que si se llama el icono TbGrid viene de react-icons/tb.Si fuera FaOutlet por ejemplo vendria de react-icons/fa.Muy asintos ellos
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header className="p-5 text-sm">
      <div className="flex justify-end items-center space-x-4">
        {/* recuerda que el Link de Next tmb mejora el SEO */}
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow duration-300">
          Sign in
        </button>
      </div>
    </header>
  );
};
export default SearchHeader;
