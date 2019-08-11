import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TypographyStyle } from "react-typography";
import Typography from "../styles/Typography";
import Theme, { Variables } from "../styles/Theme";
import "../styles/index.scss";
import Header from "../components/Header/";
import Intro from "../components/Intro/";

const Main = styled.div`
  margin-left: ${Variables.gap}px;
  background-color: #ebebeb;
  min-height: calc(100vh - ${Variables.gap}px);
  margin-top: ${Variables.gap}px;
`;

const MainLayout = ({ children, ...rest }) => (
  <Main {...rest}>{React.cloneElement(children, { ...rest })}</Main>
);

MainLayout.defaultProps = {};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const MainLayoutExport = props => {
  const [introActive, toggleIntro] = useState(true);

  const onToggleIntro = value => {
    if (value) {
      try {
        window.scrollTo(0, 0);
      } catch (e) {}
    }
    toggleIntro(value);
  };

  return (
    <Theme>
      <Intro active={introActive} onClick={() => onToggleIntro(false)} />
      <Header
        className={introActive ? "" : "active"}
        onClick={() => onToggleIntro(true)}
      />
      <TypographyStyle typography={Typography} />
      <MainLayout {...props} {...{ introActive }} />
    </Theme>
  );
};

export default MainLayoutExport;
