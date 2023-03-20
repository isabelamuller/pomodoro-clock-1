import React from "react";
import { ClockContainer, ButtonContainer } from "./styles";
import Counter from "../Counter";
import Button from "../Button";

class Clock extends React.Component {
  startCounting = () => {
    console.log("teste");
  };

  render() {
    return (
      <ClockContainer>
          <Button types="resetButton" name="Reset" />
        <Counter />
        <ButtonContainer>
          <Button
            types="default"
            name="Start"
            handleClick={() => this.startCounting()}
          />
          <Button types="default" name="Pause" />
        </ButtonContainer>
      </ClockContainer>
    );
  }
}

export default Clock;
