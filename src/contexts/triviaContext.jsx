import { createContext, useContext, useState, useReducer } from "react";
import { stages } from "../hooks/stageReducer";

const TriviaGetData = createContext();
const TriviaSetData = createContext();

export function useData() {
  return useContext(TriviaGetData);
}

export function useDataSeters() {
  return useContext(TriviaSetData);
}

export default function TriviaProvider({ children }) {

  const [name, setName] = useState("User");
  const [difficulty, setDifficulty] = useState("medium");
  const [quantity, setQuantity] = useState(10);
  const [score, setScore] = useState([]);
  const [actual, setActual] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [stage, dispatch] = useReducer(changeStage, stages.home)

  const states = {
    name,
    difficulty,
    quantity,
    score,
    actual,
    questions,
    stage,
  };

  const seters = {
    setName,
    setDifficulty,
    setQuantity,
    setScore,
    setActual,
    setQuestions,
    dispatch,
  };

  function changeStage(state, { type }){
    const { home, trivia, result } = stages;

    switch (type) {
      case home:
        setQuestions(null);
        setActual(0);
        setScore([]);
        return home;
  
      case trivia:
        return name && difficulty && quantity > 0 ? trivia : state;
  
      case result:
        return result;
  
      default:
        return home;
    }
  };

  return (
    <TriviaGetData.Provider value={states}>
      <TriviaSetData.Provider value={seters}>{children}</TriviaSetData.Provider>
    </TriviaGetData.Provider>
  );
}
