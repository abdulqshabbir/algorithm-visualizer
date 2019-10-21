import React, { useState, useEffect } from "react";
import { createBubbleSortAnimationFrames } from "../algorithms/bubbleSort";
import "./sortingVisualizer.css";

const MIN = 10;
const MAX = 300;

const SortingVisualizer = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [unsortedArrayLength, setUnsortedArrayLength] = useState(30);

  useEffect(() => {
    let initialRandomArray = generateRandomArrayOfLength(unsortedArrayLength);
    setRandomArray(initialRandomArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRandomArray]);

  const handleBubbleSortAnimation = () => {
    const animationFrames = createBubbleSortAnimationFrames(
      randomArray,
      setRandomArray
    );
    for (let frame = 0; frame < animationFrames.length; frame++) {
      setTimeout(() => {
        setRandomArray(animationFrames[frame]);
      }, 500 + 10 * frame);
    }
  };

  const handleArrayLengthChange = e => {
    setUnsortedArrayLength(unsortedArrayLength);
  };
  return (
    <div>
      <div className="container">
        {randomArray.map((number, index) => (
          <div
            key={index}
            className={"vertical-bar"}
            style={{ paddingBottom: `${number}px` }}
          ></div>
        ))}
      </div>
      <button onClick={handleBubbleSortAnimation}>Bubble Sort</button>
      <input
        type="range"
        min="30"
        max="1000"
        step="10"
        value={unsortedArrayLength}
        onChange={handleArrayLengthChange}
      />
    </div>
  );
};

const generateRandomArrayOfLength = n => {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(generateRandomWholeNumberInRange(MIN, MAX));
  }
  return randomArray;
};

const generateRandomWholeNumberInRange = (min, max) => {
  // will generate random whole number between min(inclusive) and max (exclusive)
  const irrationalRandomNumber = Math.random() * (max - min) + min;
  return Math.floor(irrationalRandomNumber);
};

export default SortingVisualizer;
