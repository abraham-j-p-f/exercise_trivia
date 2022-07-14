import { useData } from "../contexts/generalContext";
import { useUpdatedData } from "../contexts/generalContext";

export default function Result({ useScore, useActual }) {
  const [name, difficulty, quantity] = useData();
  const [setName, setDifficulty, setQuantity] = useUpdatedData();
  const [score, setScore] = useScore;
  const [actual, setActual] = useActual;

  const resetData = () => {
    setName();
    setDifficulty();
    setQuantity();
    setScore([]);
    setActual(0)
  };

  return (
    <>
      <div className="h-2/6 flex justify-center items-center flex-wrap">
        <div className="flex justify-center w-full">
          <h1>Results</h1>
        </div>
        <div className="flex justify-center w-full">
          <h1>Well done {name} !</h1>
        </div>
        <div className="flex justify-center w-full">
          <h1>Difficulty: {difficulty}</h1>
        </div>
        <div className="flex justify-center w-full">
          <h1>
            Score: {score.filter((question) => question.success).length}/
            {quantity}
          </h1>
        </div>
      </div>
      <div className="h-3/6 overflow-y-auto">
        <ul>
          {score.map((question) => {
            return (
              <li
                className={`text-sm indent-8 text-justify m-4 p-4 ${
                  question.success ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {question.question} is <b>{question.answer}</b>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-center content-center mb-3 h-1/6">
        <button className="px-4" onClick={resetData}>
          Try again
        </button>
      </div>
    </>
  );
}
