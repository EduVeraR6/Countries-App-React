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


export function useFetchCountryByName(name: string) {
  return useQuery({
    queryKey: ["countriesByName", name],
    queryFn: () => fetchCountryByName(name),
    enabled: !!name, 
    staleTime: 1000 * 60 * 5, 
    retry: false, 
    select : (data) => data.sort((a,b) => a.name.common.localeCompare(b.name.common)),
  });
}