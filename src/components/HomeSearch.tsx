"use client";
import { getRandomWord } from "@/helpers/getRandomWord";
// si le ponemos "use client" en la primera linea del modulo hardcodeamos que lo renderize el cliente.Por defecto son siempre Server Components

// en Next 13 el hook useRouter viene de next/navigation y no de next/router(ojo con este error)
import { useRouter } from "next/navigation";
// another several shits
import { FormEvent, MouseEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [rndSearchLoading, setRndSearchLoading] = useState(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement> | MouseEvent) => {
    evt.preventDefault();
    if (!input.trim()) return;
    console.log({ input });
    // redirect with the next-router v13 from next/navigation
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (evt: MouseEvent) => {
    setRndSearchLoading(true);
    // necesarios si vamos a redirigir ??
    // evt.preventDefault();
    const term = await getRandomWord();
    if (!term) return;
    router.push(`/search/web?searchTerm=${term}`);
    setRndSearchLoading(false);
  };

  return (
    <div className="">
      {/* la psseudo clase focus-within selecciona un elemento si ese elemento o alguno de sus hijos ha sido focused(no es hover,ojo,sino focus).En resumen se activa si se hace focus en él o en sus hijos.Es muy util en formularios para resaltar el campo targeteado actualmente */}
      <form
        className="flex w-full mt-6 mx-auto max-w-[90%] border border-gray-200 px-5 py-2.5 rounded-full hover:shadow-md transition-shadow duration-300 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl "
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        {/* realmente solo tengo que targetear al focus:outline-none y no al borde */}
        <input
          type="text"
          className="flex-grow focus:outline-none font-light"
          // nuncas confundas name que solo vale para identificar con value + onChange
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col items-center justify-center mt-8 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button disabled={rndSearchLoading} onClick={randomSearch} className="btn disabled:opacity-70">
          {rndSearchLoading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="spinner01.svg" alt="spinner" className="h-7 w-7 mx-auto" />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </div>
  );
};
export default HomeSearch;
