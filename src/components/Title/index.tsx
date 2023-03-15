import React from "react";
import { ITitle } from "./types";
import { TitleStyle } from "./styles";

class Title extends React.Component<ITitle> {
  render() {
    return <TitleStyle>{this.props.titleText}</TitleStyle>;
  }
}

export default Title;
