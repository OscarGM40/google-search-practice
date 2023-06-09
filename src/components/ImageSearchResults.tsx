import Link from "next/link";

interface ImageSearchResultsProps {
  results: any;
}

const ImageSearchResults = ({ results }: ImageSearchResultsProps) => {
  return (
    <div className=" pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result: any) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                {/* no podemos usar una Image de Next porque las urls de las imagenes son todas diferentes y desconocidas,y una Image de Next pide que se guarde su url en el next.config.Lamentablemente tiene  que ser una img de html */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSearchResults;
