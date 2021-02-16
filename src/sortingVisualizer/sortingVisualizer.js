import React, { useState, useEffect } from "react";
import createBubbleSortAnimationFrames from "../algorithms/bubbleSort";
import createInsertionSortAnimationFrames from "../algorithms/insertionSort";
import createSelectionSortAnimationFrames from "../algorithms/selectionSort";
import ArrayLengthSlider from "../arrayLengthSlider/arrayLengthSlider";
import { Button } from "semantic-ui-react";
import "./sortingVisualizer.css";

const MIN = 10;
const MAX = 300;

const SortingVisualizer = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [arrayLength, setArrayLength] = useState({ x: 30 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let initialRandomArray = generateRandomArrayOfLength(arrayLength.x);
    setRandomArray(initialRandomArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRandomArray, arrayLength]);

  const handleBubbleSortAnimation = () => {
    const animationFrames = createBubbleSortAnimationFrames(randomArray);
    setIsAnimating(true);
    for (let frame = 0; frame < animationFrames.length; frame++) {
      setTimeout(() => {
        setRandomArray(animationFrames[frame]);
      }, 500 + 10 * frame);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500 + 10 * animationFrames.length);
  };

  const handleInsertionSortAnimation = () => {
    const animationFrames = createInsertionSortAnimationFrames(randomArray);
    setIsAnimating(true);
    for (let frame = 0; frame < animationFrames.length; frame++) {
      setTimeout(() => {
        setRandomArray(animationFrames[frame]);
      }, 50 * frame);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 50 * animationFrames.length);
  };

  const handleSelectionSortAnimation = () => {
    const animationFrames = createSelectionSortAnimationFrames(randomArray);
    setIsAnimating(true);
    for (let frame = 0; frame < animationFrames.length; frame++) {
      setTimeout(() => {
        setRandomArray(animationFrames[frame]);
      }, 30 * frame);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 30 * animationFrames.length);
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
      <Button onClick={createNewRandomArray} primary disabled={isAnimating}>
        New Array
      </Button>
      <ArrayLengthSlider
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        isAnimating={isAnimating}
      />
      <Button
        onClick={handleBubbleSortAnimation}
        secondary
        disabled={isAnimating}
      >
        Bubble Sort
      </Button>
      <Button
        onClick={handleInsertionSortAnimation}
        secondary
        disabled={isAnimating}
      >
        Insertion Sort
      </Button>
      <Button
        onClick={handleSelectionSortAnimation}
        secondary
        disabled={isAnimating}
      >
        Selection Sort
      </Button>
    </div>
  );
};

const generateRandomArrayOfLength = (n) => {
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
