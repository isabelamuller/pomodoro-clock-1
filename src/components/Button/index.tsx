import React from "react";
import { ButtonReset, ButtonDefault } from "./styles";
import { IButton } from "./types";

class Button extends React.Component<IButton> {
  getButton = () => {
    switch (this.props.types) {
      case "default":
        return (
          <ButtonDefault onClick={this.props.handleClick}>
            {this.props.name}
          </ButtonDefault>
        );
      case "resetButton":
        return (
          <ButtonReset onClick={this.props.handleClick}>
            {this.props.name}
          </ButtonReset>
        );
    }
  };

  render() {
    return this.getButton();
  }
}

export default Button;
