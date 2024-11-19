import axios from "axios";

export const apiCountries = axios.create({
    baseURL: "https://restcountries.com/v3.1/"
})

