import Link from "next/link";
import HTMLReactParser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

interface WebSearchResultsProps {
  results: any;
}
const WebSearchResults = ({ results }: WebSearchResultsProps) => {
  return (
    <div className="w-full mx-auto pb-36 sm:pb-24 pl-4 md:pl-8">
      <p className="text-gray-600 text-sm mb-5 mt-3 lg:max-w-7xl mx-auto">
        About {results.searchInformation?.formattedTotalResults} results found in ({" "}
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result: any) => (
        <div className="mb-8 max-w-xl lg:max-w-7xl lg:mx-auto" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{HTMLReactParser(result.htmlSnippet)}</p>
        </div>
      ))}
      <div className="max-w-xl lg:max-w-7xl lg:mx-auto">
        <PaginationButtons />
      </div>
    </div>
  );
};
export default WebSearchResults;
