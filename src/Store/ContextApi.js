import { createContext } from "react";

const createContextApi = createContext();

const createContextProvider = ()=>{
      return <createContextApi.Provider value={{}}></createContextApi.Provider>
}

export {createContextApi,createContextProvider};