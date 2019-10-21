import React, { useState, useEffect } from "react";
import { createBubbleSortAnimationFrames } from "../algorithms/bubbleSort";
import ArrayLengthSlider from "../arrayLengthSlider/arrayLengthSlider";
import { Button } from "semantic-ui-react";
import "./sortingVisualizer.css";

const MIN = 10;
const MAX = 300;

const SortingVisualizer = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [arrayLength, setArrayLength] = useState({ x: 30 });
  console.log(randomArray, arrayLength);
  useEffect(() => {
    let initialRandomArray = generateRandomArrayOfLength(arrayLength.x);
    setRandomArray(initialRandomArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRandomArray, arrayLength]);

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
  const createNewRandomArray = () => {
    let initialRandomArray = generateRandomArrayOfLength(arrayLength.x);
    setRandomArray(initialRandomArray);
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
      <Button onClick={createNewRandomArray}>New Array</Button>
      <Button onClick={handleBubbleSortAnimation}>Bubble Sort</Button>
      <ArrayLengthSlider
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
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
