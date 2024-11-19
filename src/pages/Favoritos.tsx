import CardCountry from "../components/Countries/CardCountry";
import { useFavoritesCountries } from "../store/useCountrySelected";
import styled from "../pages/Countries.module.css";
export default function Favoritos() {
  
  const { favoriteCountries } = useFavoritesCountries();

  return (
    <div className="mt-5">
      <div className={styled.contenedorCountries}>
        {favoriteCountries.length === 0 ? (
          <p className="mt-5">No hay países favoritos seleccionados</p>
        ) : (
          favoriteCountries.map((country, index) => (
            <CardCountry key={index} country={country} isFavorite={true} />
          ))
        )}
      </div>
    </div>
  );
}
