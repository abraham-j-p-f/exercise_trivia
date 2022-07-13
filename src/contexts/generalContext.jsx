import { createContext, useState, useContext } from "react";

const TriviaData = createContext();
const TriviaDataSelect = createContext();

export function useData() {
  return useContext(TriviaData);
}

export function useUpdatedData(){
  return useContext(TriviaDataSelect);
}

export default function GeneralProvider({ children }) {
  const [name, setName] = useState();
  const [difficulty, setDifficulty] = useState();
  const [quantity, setQuantity] = useState();

  return (
    <TriviaData.Provider value={[name, difficulty, quantity]}>
      <TriviaDataSelect.Provider value={[setName, setDifficulty, setQuantity]}>
        {children}
      </TriviaDataSelect.Provider>
    </TriviaData.Provider>
  );
}
