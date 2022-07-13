import React, { useState } from "react";
import GeneralProvider from "./contexts/generalContext";
import { useData } from "./contexts/generalContext";
import Answers from "./components/Answers";
import Presentation from "./components/Presentation";
import Result from "./components/Results";

const CurrentPage = ({ useScore, useActual, useTrivias }) => {
  const [name, difficulty, quantity] = useData();
  const [score, setScore] = useScore;
  const [actual, setActual] = useActual;
  const [trivias, setTrivias] = useTrivias;

  if (name && difficulty && quantity && actual < quantity) {
    return (
      <>
        <Answers
          useScore={useScore}
          useActual={useActual}
          useTrivias={useTrivias}
        />
      </>
    );
  } else if (name && difficulty && quantity) {
    return (
      <>
        <Result useScore={useScore} trivias={trivias} />
      </>
    );
  }
  return <Presentation />;
};

export default function App() {
  const [score, setScore] = useState([]);
  const [actual, setActual] = useState(0);
  const [trivias, setTrivias] = useState(null);

  console.log(score);
  return (
    <GeneralProvider>
      <div className="w-screen h-screen flex justify-center items-center font-pstart bg-slate-900">
        <CurrentPage
          useScore={[score, setScore]}
          useActual={[actual, setActual]}
          useTrivias={[trivias, setTrivias]}
        />
      </div>
    </GeneralProvider>
  );
}
