import { useMutation } from "@tanstack/react-query";
import { Login } from "../interfaces/login.interface";
import axios from "axios";

async function login(login: Login) {
  const {data} =  await axios.post("https://reqres.in/api/login", login);
  return data;
}

export function useMutationLogin (){
  return useMutation({
    mutationFn: login
  });
}