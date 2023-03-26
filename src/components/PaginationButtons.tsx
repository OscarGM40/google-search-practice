"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // necesitamos el termino de busqueda
  const searchTerm = searchParams.get("searchTerm");
  // si viene este queryParam lo rescato,si no viene lo inicializo a 1 como Number.Ojo con los parseos
  const startIndex = +(searchParams.get("start") || 1);

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44  md:space-x-64 sm:px-0">
      {startIndex >= 10 && (
        // pathname será o /web o /image(el ultimo segmento)
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        // pathname será o /web o /image(el ultimo segmento)
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};
export default PaginationButtons;
