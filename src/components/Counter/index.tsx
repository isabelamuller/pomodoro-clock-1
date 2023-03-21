import React from "react";
import Button from "../Button";
import { CounterStyle, ButtonContainer } from "./styles";

class Counter extends React.Component {
  state = {
    minutesTask: 0,
    secondsTask: 3,
    minutesBreak: 0,
    secondsBreak: 3,
  };
  // usei esses valores (3 segundos) so pra enxergar mais rapido a mudança

  CountdownTask = () => {
    while (!(this.state.minutesTask === 0 && this.state.secondsTask === 0)) {
      if (this.state.secondsTask === 0) {
        this.setState({
          minutesTask: this.state.minutesTask - 1,
          secondsTask: 59,
        });
      } else {
        this.setState({
          minutesTask: this.state.minutesTask,
          secondsTask: this.state.secondsTask - 1,
        });
      }
      break;
    }
  };

  IntervalTask = () => {
    setInterval(this.CountdownTask, 1000);
  };

  CountdownBreak = () => {
    while (!(this.state.minutesBreak === 0 && this.state.secondsBreak === 0)) {
      if (this.state.secondsBreak === 0) {
        this.setState({
          minutesBreak: this.state.minutesBreak - 1,
          secondsBreak: 59,
        });
      } else {
        this.setState({
          minutesBreak: this.state.minutesBreak,
          secondsBreak: this.state.secondsBreak - 1,
        });
      }
      break;
    }
  };

  IntervalBreak = () => {
    setInterval(this.CountdownBreak, 1000);
  };

  render() {
    const { minutesTask, secondsTask, minutesBreak, secondsBreak } = this.state;

    function RenderingBreak() {
      return (
        <>
          {minutesBreak}:{secondsBreak < 10 ? `0${secondsBreak}` : secondsBreak}
        </>
      );
    }

    function RenderingTask() {
      return (
        <>
          {minutesTask}:{secondsTask < 10 ? `0${secondsTask}` : secondsTask}
        </>
      );
    }

    return (
      <>
        <Button
          types="resetButton"
          name="Reset"
          // handleClick={() => this.ResetCounter()}
        />
        <CounterStyle>
          {minutesTask === 0 && secondsTask === 0 ? (
            <RenderingBreak />
          ) : (
            <RenderingTask />
          )}
        </CounterStyle>
        <ButtonContainer>
          {minutesTask === 0 && secondsTask === 0 ? (
            <Button
              types="default"
              name="Start pause"
              handleClick={() => this.IntervalBreak()}
            />
          ) : (
            <Button
              types="default"
              name="Start task"
              handleClick={() => this.IntervalTask()}
            />
          )}
          <Button
            types="default"
            name="Pause"
            // handleClick={() => this.PauseButton}
          />
        </ButtonContainer>
      </>
    );
  }
}

export default Counter;
