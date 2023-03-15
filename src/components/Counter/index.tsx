import React from "react";
import { CounterStyle } from "./styles";

class Counter extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
  };

  render() {
    const { minutes, seconds } = this.state;

    return (
      <>
        <CounterStyle>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </CounterStyle>
      </>
    );
  }
}

export default Counter;

// isso vou fazer depois, so deixei "meio" pronto
