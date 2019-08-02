import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme, { GlobalStyle } from '../components/styles/Theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.div``;

const MainLayout = ({ children, ...rest }) => <Main {...rest}>{children}</Main>;

MainLayout.defaultProps = {
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


const MainLayoutExport = props => (
  <Theme>
    <Header />
    <GlobalStyle />
    <MainLayout {...props} />
    <Footer />
  </Theme>
);

export default MainLayoutExport;
