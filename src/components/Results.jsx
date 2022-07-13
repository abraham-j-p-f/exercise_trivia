import { useData } from "../contexts/generalContext";
import { useUpdatedData } from "../contexts/generalContext";

export default function Result({ useScore, trivias }) {
  const [name, difficulty, quantity] = useData();
  const [setName, setDifficulty, setQuantity] = useUpdatedData();
  const [score, setScore] = useScore;

  const resetData = () => {
    setName();
    setDifficulty();
    setQuantity();
    setScore([]);
  };

  return (
    <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-2/3 aspect-4/3 flex justify-center items-center">
      <div className="text-white">
        <div className="flex justify-center mb-3">
          <h1>Results</h1>
        </div>
        <div className="flex justify-center mb-3">
          <h1>Well done {name} !</h1>
        </div>
        <div className="flex justify-center mb-3">
          <h1>Difficulty: {difficulty}</h1>
        </div>
        <div className="flex justify-center mb-3">
          <h1>
            Score: {score.filter((question) => question.success).length}/
            {quantity}
          </h1>
        </div>
        <div className="flex justify-center mb-3">
          <button onClick={resetData}>Try again</button>
        </div>
      </div>
    </div>
  );
}
