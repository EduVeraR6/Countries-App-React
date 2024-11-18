import { create } from "zustand";
import { Country } from "../interfaces/countries.interface";
import { persist } from "zustand/middleware";

type FavoritesCountries = {
  favoriteCountries: Country[];
  addFavoriteCountry: (country: Country) => void;
  removeFavoriteCountry: (country: Country) => void;
};

export const useFavoritesCountries = create(
  persist<FavoritesCountries>(
    (set) => ({
      favoriteCountries: [],
      addFavoriteCountry: (country: Country) => {
        set((state) => ({
          favoriteCountries: [...state.favoriteCountries, country],
        }));
      },
      removeFavoriteCountry: (country: Country) => {
        set((state) => ({
          favoriteCountries: state.favoriteCountries.filter(
            (c) => c.name.common !== country.name.common
          ),
        }));
      },
    }),
    {
      name: "favorites-countries-storage",
    }
  )
);
