import React from "react";
import Slider from "react-input-slider";
import { Button, Modal } from "semantic-ui-react";

const ArrayLengthSlider = ({ arrayLength, setArrayLength, isAnimating }) => (
  <Modal
    trigger={
      <Button primary disabled={isAnimating}>
        Array Length Slider
      </Button>
    }
  >
    <Modal.Header>
      Choose an Appropiate Array Length by using the Slider!
    </Modal.Header>
    <Modal.Content>
      <p>Current length chosen: {arrayLength.x}</p>
      <Slider
        axis="x"
        xmin={5}
        xmax={70}
        xstep={1}
        x={arrayLength.x}
        onChange={({ x }) => setArrayLength({ x })}
      />
    </Modal.Content>
  </Modal>
);

export default ArrayLengthSlider;
