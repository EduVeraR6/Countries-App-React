import { useFavoritesCountries } from "../store/useCountrySelected";


export default function Favoritos() {

   const {favoriteCountries} =  useFavoritesCountries();


  


    return (
    <div>
     <p>
        {
          favoriteCountries.length === 0? "No hay países favoritos seleccionados" : favoriteCountries.map((country, index) => (
            <li key={index}>{country.name?.common}</li>
          ))
        }

     </p>
    </div>
  )
}
