import React from "react";
import { PageWrapper, ContentWrapper, ClockWrapper } from "./styles";
import Clock from "../components/Clock";
import Header from "../components/Header";

class PomodoroClock extends React.Component {
  render() {
    return (
      <PageWrapper>
        <ContentWrapper>
          <Header />
          <Clock />
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default PomodoroClock;
