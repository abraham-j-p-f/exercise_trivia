import { stages } from "../hooks/stageReducer";
import { useData } from "../contexts/triviaContext";

import Home from "./Home";
import Trivia from "./Trivia";
import Result from "./Result";

export default function ActualStage(){
  const { stage } = useData();

  switch (stage) {
    case stages.home:   return <Home/>;
    case stages.trivia: return <Trivia/>;
    case stages.result: return <Result/>;
    default:            return <Home />;
  }
};