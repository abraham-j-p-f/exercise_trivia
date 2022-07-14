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

  console.log(actual);

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
        <Result useScore={useScore} useActual={useActual} />
      </>
    );
  }
  return <Presentation />;
};

export default function App() {
  const [score, setScore] = useState([]);
  const [actual, setActual] = useState(0);
  const [trivias, setTrivias] = useState(null);
  return (
    <GeneralProvider>
      <div className="w-screen h-screen font-pstart bg-slate-900 p-4">
        <div className="text-white w-full h-1/12 flex justify-center items-center">
          <a
            target="_blank"
            className="textcrt text-white"
            href="https://github.com/abraham-j-p-f"
          >
            Hi, I'm Abe, GitHub here!
          </a>
        </div>
        <div className="h-10/12 w-full flex justify-center">
          <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-full aspect-4/3 flex justify-center items-center">
            <div className="text-white w-3/4 h-full py-4">
              <CurrentPage
                useScore={[score, setScore]}
                useActual={[actual, setActual]}
                useTrivias={[trivias, setTrivias]}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/12 flex justify-center items-center">
          <a
            target="_blank"
            className="textcrt text-white"
            href="http://aleclownes.com/2017/02/01/crt-display.html"
          >
            CRT EFFECT CREDIT
          </a>
        </div>
      </div>
    </GeneralProvider>
  );
}
