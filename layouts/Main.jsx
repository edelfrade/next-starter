import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TypographyStyle } from 'react-typography';
import Typography from '../styles/Typography';
import Theme from '../styles/Theme';
import "../styles/index.scss";
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Main = styled.div``;

const MainLayout = ({ children, ...rest }) => <Main {...rest}>{children}</Main>;

MainLayout.defaultProps = {
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


const MainLayoutExport = props => (
  <Theme>
    {/* <Header /> */}
    {/* <GlobalStyle /> */}
    <TypographyStyle typography={Typography} />
    <MainLayout {...props} />
    {/* <Footer /> */}
  </Theme>
);

export default MainLayoutExport;
