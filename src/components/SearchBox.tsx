"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  // fijate que desde la 13 estos dos vienen de next/navigation
  const params = useSearchParams();
  const router = useRouter();
  const searchTerm = params.get("searchTerm") || "";

  const [term, setTerm] = useState(searchTerm);

  const handleSubmit = (e: FormEvent<HTMLFormElement | SVGElement>) => {
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  };

  return (
    <form
      className="flex items-center border-gray-200 rounded-full shadow-lg px-6 py-3 flex-grow max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        placeholder="Enter term to search for"
        value={term}
        onChange={(evt) => setTerm(evt.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer pl-[2px]" onClick={handleSubmit} />
    </form>
  );
};
export default SearchBox;
// el modelo vista presentador es una variación del modelo vista controlador en el que el modelo es una interfaz que define los datos(dtos y modelos) el presentador actua sobre el modelo y la vista,recuperando datos de los repositorios y formateandolos para la vista.La vista es una interfaz pasiva que exhibe los datos.Parece algo de C#/Java y PHP,igual que el MVVM(Model-View-ViewModel)
