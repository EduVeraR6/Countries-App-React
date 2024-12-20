import { useForm } from "react-hook-form";
import CardCountry from "../components/Countries/CardCountry";
import {
  useFetchCountries,
  useFetchCountryByName,
} from "../hooks/useCountries";
import styled from "../pages/Countries.module.css";
import { useFavoritesCountries } from "../store/useCountrySelected";

export default function Countries() {
  const { register, watch } = useForm();

  const { data, isLoading, isError, error } = useFetchCountries();

  const { favoriteCountries } = useFavoritesCountries();

  const response = useFetchCountryByName(watch("country"));

  console.log("favoritos", response);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <h1 className="titulo">Lista Paises</h1>

      <section className="d-flex justify-content-center align-items-center">
        <form className="d-flex justify-content-center align-items-center" >
          <input
            className="form-control m-5"
            {...register("country", { required: true })}
            placeholder="Buscar país..."
          />
        </form>
      </section>

      <div className={styled.contenedorCountries}>
        {(response.data?.length ?? 0 > 0 ? response.data : data ?? [])?.map(
          (country, index) => (
            <CardCountry
              isFavorite={favoriteCountries.some(
                (c) => JSON.stringify(c) === JSON.stringify(country)
              )}
              key={index}
              country={country}
            />
          )
        )}
      </div>
    </>
  );
}
