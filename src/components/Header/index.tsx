import React from "react";
import { HeaderContainer } from "./styles";
import Title from "../Title";
import { VscQuestion } from "react-icons/vsc";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Title titleText="Pomodoro Timer" />
        <VscQuestion
          style={{ fontSize: "1.6rem", color: "white", cursor: "pointer" }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
