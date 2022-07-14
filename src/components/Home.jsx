import { useData, useDataSeters } from "../contexts/triviaContext";
import { stages } from "../hooks/stageReducer";

export default function Home() {
  const { name, difficulty, quantity,  } = useData();
  const { setName, setDifficulty, setQuantity, dispatch } = useDataSeters();

  return (
    <>
      <div className="flex flex-wrap h-2/5 w-full content-center justify-center text-xs sm:text-base">
        <div className="flex justify-center text-center my-2">
          <h1>Welcome to the Trivia Challenge {name}!</h1>
        </div>
        <div className="flex justify-center text-center my-2">
          <p>You will be presented with { quantity } True or False Questions</p>
        </div>
        <div className="flex justify-center text-center my-2">
          <span>Can you score 100%?</span>
        </div>
      </div>
      <div className="flex flex-wrap h-3/5 w-full justify-center overflow-y-auto items-center py-4">
        <div className="text-center inline-flex flex-wrap w-56 h-20 px-2 mb-2">
          <div className="mb-2">
            <label htmlFor="name">Your name</label>
          </div>
          <div className="text-black w-full outline-none focus:outline-none ">
            <input
              className="w-full outline-none"
              type="text"
              id="name"
              placeholder="Neo"
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />
          </div>
        </div>
        <div className="text-center inline-flex flex-wrap  w-56 h-20 px-2 mb-2">
          <div className="mb-2">
            <h1>Difficulty</h1>
          </div>
          <div className="text-black w-full">
            <select 
              className="appearance-none w-full" 
              value={ difficulty } 
              onChange={ ({ target }) => setDifficulty(target.value) }
              >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>

            </select>
          </div>
        </div>
        <div className="inline-flex flex-wrap text-left w-56 h-20 px-2 mb-2">
          <div className="mb-2">
            <h1 className="text-left">Questions</h1>
          </div>
          <div>
            <input
              className="text-black w-full h-12"
              type="number"
              value={ quantity }
              onChange={ ({ target }) => target.value >= 0 ? setQuantity(target.value) : target.value }
            />
          </div>
        </div>
        <div className="inline-flex w-56 h-20 justify-center items-end px-2 mb-2">
          <button
            onClick={ () => dispatch({ type: stages.trivia }) }
            className="text-black crt w-full h-12 bg-white"
          >
            Begin
          </button>
        </div>
      </div>
    </>
  );
}
