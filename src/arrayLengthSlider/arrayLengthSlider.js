import React from "react";
import Slider from "react-input-slider";

const ArrayLengthSlider = ({ arrayLength, setArrayLength }) => {
  return (
    <Slider
      axis="x"
      xmin={20}
      xmax={70}
      xstep={10}
      x={arrayLength.x}
      onChange={({ x }) => setArrayLength({ x })}
    />
  );
};

export default ArrayLengthSlider;
