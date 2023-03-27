export const dynamic = "force-dynamic";
// esta pagina es SSR,desde la version 13 ya no necesitamos funciones extra(getServerSideProps)

import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

type Props = {
  params?: {
    num?: string;
  };
  searchParams: {
    searchTerm?: string;
    start?: string;
  };
};
// fijate que en el cliente tendria que acceder a los params con el hook useSearchParams, en el server es diferente y ya tengo acceso a él con una prop(que es como si llamara al hook simplemente,entiendo.Aunque cambia un poco el type solo)
// tmb es muy facil sacar un queryParam desde Next13,simplemente pasando un argumento llamado searchParams
const WebSearchPage = async ({ searchParams }: Props) => {
  const startIndex = searchParams.start || "1";
  await new Promise((response) => setTimeout(() => response(true), 500));
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`,
  );

  // desde Next 13 puedo crear un file llamado error.js que capturará el error.La altura a la que se cree el file determinará donde se captura el error(en este caso queremos que sea tanto /search/web como /search/image luego lo ponemos en /search/error.ts)
  /*   if(!response.ok){
    throw new Error("Something went wrong.Failed to fetch data")
  } */

  const data = await response.json();
  //  los results vienen en la propiedad items

  // ojo,un console.log en el server no lo veré en las DevTools,solo en la terminal
  // console.log({ results: data.items });

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else or go back to the homepage.</p>
        <Link href="/" className="text-blue-500 mt-2">
          Go Home
        </Link>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={data} />}</>;
};
export default WebSearchPage;
