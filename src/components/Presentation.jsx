import { useRef, useEffect, useState } from "react";
import { useUpdatedData } from "../contexts/generalContext";

export default function Presentation() {
  const name = useRef();
  const difficulty = useRef();
  const quantity = useRef();
  const [amount, setAmount] = useState("10");

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
    <>
      <div className="flex flex-wrap h-2/5 w-full content-center justify-center text-xs sm:text-base">
        <div className="flex justify-center text-center my-2">
          <h1>Welcome to the Trivia Challenge</h1>
        </div>
        <div className="flex justify-center text-center my-2">
          <p>You will be presented with {amount} True or False Questions</p>
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
              ref={name}
              id="name"
              placeholder="Neo"
            />
          </div>
        </div>
        <div className="text-center inline-flex flex-wrap  w-56 h-20 px-2 mb-2">
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
        <div className="inline-flex flex-wrap text-left w-56 h-20 px-2 mb-2">
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
        <div className="inline-flex w-56 h-20 justify-center items-end px-2 mb-2">
          <button
            onClick={handleSubmit}
            className="text-black crt w-full h-12 bg-white"
          >
            Begin
          </button>
        </div>
      </div>
    </>
  );
}
