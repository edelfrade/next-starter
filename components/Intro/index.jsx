import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { Container, TopBar, Content } from "./styles";
import Apple from "../Apple/";

const Intro = ({ onClick, active }) => {
  const { countUp, start } = useCountUp({
    start: 1400,
    end: 2019,
    duration: 1
  });

  useEffect(() => {
    if (active) start();
  }, [active]);

  return (
    <Container className={active ? "active" : ""} {...{ onClick }}>
      <TopBar className={active ? "active" : ""}>
        <img src="/static/images/logo.png" alt="" />
      </TopBar>
      <Content className={active ? "active" : ""}>
        <Apple
          className="intro-apple"
          img="/static/images/taller-logo.png"
          copy="New Products Coming This Summer"
        />
        <div className="year">
          <h2>{countUp}</h2>
        </div>
      </Content>
    </Container>
  );
};

export default Intro;
