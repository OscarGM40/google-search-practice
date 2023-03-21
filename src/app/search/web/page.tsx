// esta pagina es SSR,desde la version 13 ya no necesitamos funciones extra(getServerSideProps)

type Props = {
  params?: {
    num?: string;
  };
  searchParams: {
    searchTerm?: string;
  };
};

// tmb es muy facil sacar un queryParam desde Next13,simplemente pasando un argumento llamado searchParams
const WebSearchPage = async ({ searchParams }: Props) => {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`,
  );
  const data = await response.json();
  //  los results vienen en la propiedad items
  // ojo,un console.log en el server no lo veré en las DevTools y estamos en una page
  // console.log({ results: data.items });
  const results = data.items;

  return <>{results && results.map((result: any, i: number) => <h1 key={i}>{result.title}</h1>)}</>;
};
export default WebSearchPage;
