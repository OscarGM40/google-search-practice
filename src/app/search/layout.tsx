import SearchHeader from "@/components/SearchHeader";
import "../../styles/globals.css";

// este layout va a ser sólo comun para cuando este en /search/** por la altura a la que está este archivo.Fijate que va a ir dentro del primero,y por ello va a coger el title y el Footer del primero,además no puedo usar otra etiqueta html o body ya que ya la he usado
export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    // ojo que no puede haber dos etiquetas <html></html> o <body></body> en la aplicacion o dará un error de Hidratación
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
