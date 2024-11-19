import { useState } from "react";
import { Country } from "../../interfaces/countries.interface";
import styled from "../Countries/CardCountry.module.css";
import CountryInfo from "../modals/CountryInfo";
import { useFavoritesCountries } from "../../store/useCountrySelected";

interface Props {
  country: Country;
  isFavorite: boolean;
}

export default function CardCountry({ country, isFavorite }: Props) {
  const [show, setShow] = useState(false);
  const [countrySelect, setCountrySelect] = useState({} as Country);

  const selectFavorite = useFavoritesCountries(
    (state) => state.addFavoriteCountry
  );
  const removeFavorite = useFavoritesCountries(
    (state) => state.removeFavoriteCountry
  );

  const handleShow = (country: Country) => {
    setCountrySelect(country);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleFavorite = () => {
    console.log("handleFavorite", isFavorite);

    if (isFavorite) {
      removeFavorite(country);
    } else {
      selectFavorite(country);
    }
  };

  return (
    <div className={styled.contenedor}>
      <h1 className={styled.nombrePais}>{country.name.common}</h1>
      <div>
        <img
          className={styled.imgBandera}
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>

      <div className={styled.buttonInfoContenedor}>
        <button
          className={styled.buttonInfo}
          onClick={() => handleShow(country)}
        >
          Ver mas info
        </button>
      </div>

      <i
        onClick={handleFavorite}
        style={{ cursor: "pointer", fontSize: "20px" }}
        className={isFavorite ? `bi bi-star-fill` : `bi bi-star`}
      ></i>

      <CountryInfo
        country={countrySelect}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
}
