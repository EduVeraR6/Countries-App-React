import { useQuery } from "@tanstack/react-query";
import { apiCountries } from "../api/countries.api";
import { Country } from "../interfaces/countries.interface";

async function fetchCountries() {
  const { data } = await apiCountries.get<Country[]>("/all");
  return data;
}

async function fetchCountryByName(name: string) {
  const { data } = await apiCountries.get<Country[]>(`/name/${name}`);
  return data;
}


export function useFetchCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    select : (data) => data.sort((a,b) => a.name.common.localeCompare(b.name.common)),
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
}


// Consulta para países por nombre
export function useFetchCountryByName(name: string) {
  return useQuery({
    queryKey: ["countriesByName", name],
    queryFn: () => fetchCountryByName(name),
    enabled: !!name, // Solo ejecuta la consulta si name no es vacío o null
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false, // Opcional: evita reintentos innecesarios si `name` es inválido
    select : (data) => data.sort((a,b) => a.name.common.localeCompare(b.name.common)),
  });
}



