import SearchHeader from "@/components/SearchHeader";
import "../../styles/globals.css";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    // ojo que no puede haber dos etiquetas <html></html> o <body></body> en la aplicacion o dará un error de Hidratación
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
