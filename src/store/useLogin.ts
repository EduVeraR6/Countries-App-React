import { create } from "zustand";

type useIsLogin = {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
}



export const useIsLogin =  create<useIsLogin>((set) => ({
    isLogin: false,
    setIsLogin: (logeado: boolean) => set(() => ({
        isLogin: logeado
    }))
}))