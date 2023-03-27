export const dynamic = "force-dynamic";
import ImageSearchResults from "@/components/ImageSearchResults";
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

const ImageSearchPage = async ({ searchParams }: Props) => {
  const startIndex = searchParams.start || "1";
  await new Promise((response) => setTimeout(() => response(true), 500));
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`,
  );

  const data = await response.json();
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
  return <>{results && <ImageSearchResults results={data} />}</>;
};
export default ImageSearchPage;
