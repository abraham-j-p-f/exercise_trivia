import { useRef, useEffect, useState } from "react";
import { useUpdatedData } from "../contexts/generalContext";

export default function Presentation() {
  const name = useRef();
  const difficulty = useRef();
  const quantity = useRef();
  const [amount, setAmount] = useState('10');

  useEffect(() => {
    difficulty.current.value = "easy";
    quantity.current.value = amount;
  }, []);

  const [setName, setDifficulty, setQuantity] = useUpdatedData();

  const handleSubmit = () => {
    setName(name.current.value);
    setDifficulty(difficulty.current.value);
    setQuantity(quantity.current.value);
  };

  return (
    <div className="shadow-inner crt bg-neutral-900 px-4 overflow-hidden rounded-3xl relative h-2/3 aspect-4/3 flex justify-center items-center">
      <div className="w-3/4 py-8 text-white text-center">
        <div className="flex justify-center mb-4">
          <h1>Welcome to the Trivia Challenge</h1>
        </div>
        <div className="flex justify-center mb-4">
          <p>You will be presented with {amount} True or False Questions</p>
        </div>
        <div className="flex justify-center mb-8">
          <span>Can you score 100%?</span>
        </div>
        <div className="flex w-full overflow-hidden justify-between mb-4">
          <div className="text-center inline-flex flex-wrap w-6/12 px-2">
            <div className="mb-2">
              <label htmlFor="name">Your name</label>
            </div>
            <div className="text-black w-full outline-none focus:outline-none">
              <input
                className="w-full outline-none"
                type="text"
                ref={name}
                id="name"
                placeholder="Neo"
              />
            </div>
          </div>
          <div className="text-center inline-flex flex-wrap w-6/12 px-2">
            <div className="mb-2">
              <h1>Difficulty</h1>
            </div>
            <div className="text-black w-full">
              <select className="appearance-none w-full" ref={difficulty}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-end w-full overflow-hidden justify-between mb-4">
          <div className="flex flex-wrap text-left w-2/4 px-2">
            <div className="mb-2">
              <h1 className="text-left">Questions</h1>
            </div>
            <div>
              <input
                className="text-black w-full h-12"
                type="number"
                name=""
                id=""
                ref={quantity}
                onClick={() => setAmount(quantity.current.value)}
              />
            </div>
          </div>
          <div className="flex w-2/4 justify-center items-center px-2 h-12">
            <button
              onClick={handleSubmit}
              className="text-black crt w-full bg-white h-full"
            >
              Begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
