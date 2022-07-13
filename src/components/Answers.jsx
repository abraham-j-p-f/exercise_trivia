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

  function Radio({ color, name, id, children, value }) {
    const container = `border-${color}-700 border-4 flex items-center p-1 bg-white font-medium`;
    const radio = `form-radio checked:bg-none rounded-none transition-all duration-200 h-10 w-10 border-${color}-700 border-4 text-${color}-700 checked:bg-${color}-700 focus:border-${color}-700 focus:ring-inset focus:ring-2 focus:ring-white`;
    const text = `mx-4 text-${color}-700 uppercase`;
    return (
      <div className={container}>
        <input
          className={radio}
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={answer === value}
          onChange={handleChange}
        />
        <span className={text}>{children}</span>
      </div>
    );
  }

  if (!trivias) {
    return (
      <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-2/3 aspect-4/3 flex justify-center items-center">
        <h1 className="text-white">Loading...</h1>
      </div>
    )
  }
  return (
    <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-2/3 aspect-4/3 flex justify-center items-center">
      <div className="w-3/4 py-8 text-white text-center">
      <div className="text-white">
        <div className="flex justify-center my-2 text-xl">
          <h1 className="uppercase text-center">
            Category: {trivias[actual].category}
          </h1>
        </div>
        <div className="flex justify-center my-4">
          <p className="text-center">{trivias[actual].question}</p>
        </div>
        <div className="flex justify-evenly my-4 text-black">
          <Radio name="answer" id="True" color="green" value="True">
            True
          </Radio>
          <Radio name="answer" id="False" color="red" value="False">
            False
          </Radio>
        </div>
        <div className="flex justify-between items-center">
          <h1>{actual}/{quantity}</h1>
          <Button />
        </div>
      </div>
      </div>
    </div>
  );
}
