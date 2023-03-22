import React from "react";
import { ClockContainer, ButtonContainer } from "./styles";
import Counter from "../Counter";

class Clock extends React.Component {


  render() {
    return (
      <ClockContainer>
        <Counter />
      </ClockContainer>
    );
  }
}

export default Clock;
