import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TypographyStyle } from "react-typography";
import Typography from "../styles/Typography";
import Theme, { Variables } from "../styles/Theme";
import "../styles/index.scss";
import Header from "../components/Header/";
import Intro from "../components/Intro/";
// import Footer from '../components/Footer';

const Main = styled.div`
  margin-left: ${Variables.gap}px;
  background-color: #ebebeb;
  min-height: calc(100vh - ${Variables.gap}px);
  margin-top: ${Variables.gap}px;
`;

const MainLayout = ({ children, ...rest }) => <Main {...rest}>{children}</Main>;

MainLayout.defaultProps = {};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

const MainLayoutExport = props => {
  const [introActive, toggleIntro] = useState(true);

  return (
    <Theme>
      {introActive && <Intro onClick={() => toggleIntro(false)} />}
      {!introActive && <Header onClick={() => toggleIntro(true)} />}
      {/* <GlobalStyle /> */}
      <TypographyStyle typography={Typography} />
      <MainLayout {...props} />
      {/* <Footer /> */}
    </Theme>
  );
};

export default MainLayoutExport;
