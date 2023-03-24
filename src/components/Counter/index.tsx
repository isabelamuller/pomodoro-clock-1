import React from "react";
import Button from "../Button";
import { CounterStyle, ButtonContainer } from "./styles";

class Counter extends React.Component {
  interval: NodeJS.Timeout | null = null;
  audioRef: React.RefObject<HTMLAudioElement> = React.createRef();

  url = require("../../Assets/bell.wav");

  state = {
    minutes: 0,
    seconds: 5,
    isBreak: true,
  };
  // usei esses valores (5 segundos) so pra enxergar mais rapido a mudança.

  Countdown = () => {
    this.interval = setInterval(() => {
      if (this.state.seconds === 0 && this.state.minutes === 0) {
        this.clearInterval();
        this.setState({
          minutes: this.state.isBreak ? 5 : 25,
          isBreak: !this.state.isBreak,
          seconds: 0,
        });
        if (this.audioRef.current) {
          this.audioRef.current.play();
        }
        return;
      }
      if (this.state.seconds === 0 && this.state.minutes > 0) {
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
    }, 1000);
  };

  ResetCounter = () => {
    this.setState({
      minutes: this.state.isBreak ? 25 : 5,
      seconds: 0,
    });
    this.clearInterval();
  };

  PauseCounter = () => {
    this.clearInterval();
  };

  clearInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  render() {
    const { minutes, seconds, isBreak } = this.state;

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
          handleClick={() => this.ResetCounter()}
        />
        <CounterStyle>
          <RenderingCounter />
          <audio ref={this.audioRef} src={this.url} />
        </CounterStyle>
        <ButtonContainer>
          {isBreak ? (
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
            handleClick={() => this.PauseCounter()}
          />
        </ButtonContainer>
      </>
    );
  }
}

export default Counter;
