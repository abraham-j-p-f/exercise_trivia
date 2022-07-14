import { useEffect, useState, useRef } from "react";
import he from "he";
import { useData } from "../contexts/generalContext";

export default function Answers({ useScore, useActual, useTrivias }) {
  const [trivias, setTrivias] = useTrivias;
  const [answer, setAnswer] = useState();
  const [actual, setActual] = useActual;
  const [score, setScore] = useScore;
  const [name, difficulty, quantity] = useData();
  const radio = useRef();

  async function getTrivias() {
    const url = `https://opentdb.com/api.php?amount=${quantity}&difficulty=${difficulty}&type=boolean`;
    const response = await fetch(url);
    const data = await response.json();
    const trivias = await data.results;
    trivias.forEach((element) => {
      element.category = he.decode(element.category);
      element.question = he.decode(element.question);
    });
    setTrivias(trivias);
  }

  useEffect(() => {
    getTrivias();
  }, []);

  function next() {
    if (answer) {
      setScore([
        ...score,
        {
          question: trivias[actual].question,
          answer: trivias[actual].correct_answer,
          success: trivias[actual].correct_answer === answer,
        },
      ]);
      setAnswer();
      setActual(actual + 1);
    }
  }

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function Button() {
    return (
      <button className="my-4 crt" onClick={next}>
        Siguiente
      </button>
    );
  }

  function Radio({ name, id, children, value }) {
    const ROG = value === "True";
    const border = `${ROG ? "border-green-700" : "border-red-700"}`;
    const borderFocus = `${
      ROG ? "focus:border-green-700" : "focus:border-red-700"
    }`;
    const text = `${ROG ? "text-green-700" : "text-red-700"}`;
    const bgChecked = `${ROG ? "checked:bg-green-700" : "checked:bg-red-700"}`;

    return (
      <div
        className={`${border} border-4 flex items-center p-1 bg-white font-medium`}
      >
        <input
          className={`form-radio checked:bg-none rounded-none transition-all duration-200 h-10 w-10 ${border} border-4 ${text} ${bgChecked} ${borderFocus} focus:ring-inset focus:ring-2 focus:ring-white`}
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={answer === value}
          onChange={handleChange}
        />
        <span className={`mx-4 ${text} uppercase`}>{children}</span>
      </div>
    );
  }

  if (!trivias) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="text-white flex flex-wrap h-full justify-center content-center">
      <div className="flex justify-center my-2 text-xl">
        <h1 className="uppercase text-center">
          Category: {trivias[actual].category}
        </h1>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-center">{trivias[actual].question}</p>
      </div>
      <div className="flex justify-evenly w-full my-4 text-black flex-row-reverse">
        <Radio name="answer" id="True" value="True">
          True
        </Radio>
        <Radio name="answer" id="False" value="False">
          False
        </Radio>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1>
          {actual}/{quantity}
        </h1>
        <Button />
      </div>
    </div>
  );
}
