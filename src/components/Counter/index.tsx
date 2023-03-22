import React from "react";
import Button from "../Button";
import { CounterStyle, ButtonContainer } from "./styles";

class Counter extends React.Component {
  state = {
    minutes: 0,
    seconds: 5,
    isBreakOver: true,
  };
  // usei esses valores (5 segundos) so pra enxergar mais rapido a mudança. task eh 5 segundos e pausa eh 4 segundos

  Countdown = () => {
    const counterLogic = () => {
      if (!(this.state.minutes === 0 && this.state.seconds === 0)) {
        if (this.state.seconds === 0) {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59,
          });
        } else {
          this.setState({
            minutesTask: this.state.minutes,
            seconds: this.state.seconds - 1,
          });
        }
      }
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        clearInterval(interval);
        if (this.state.isBreakOver) {
          this.setState({
            minutes: 0,
            seconds: 4,
            isBreakOver: false,
          });
        } else {
          this.setState({
            minutes: 0,
            seconds: 5,
            isBreakOver: true,
          });
        }
      }
    };
    const interval = setInterval(counterLogic, 1000);
  };
  
  render() {
    const { minutes, seconds, isBreakOver } = this.state;
    
    function RenderingCounter() {
      return (
        <>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
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
          <RenderingCounter />
        </CounterStyle>
        <ButtonContainer>
          {isBreakOver ? (
            <Button
            types="default"
            name="Start"
            handleClick={() => this.Countdown()}
            />
            ) : (
              <Button
              types="default"
              name="Start break"
              handleClick={() => this.Countdown()}
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
