import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';

class Events extends Component {
  constructor() {
    super();
    this.state = { sameRoute: false };
  }

  componentDidMount() {
    NProgress.configure({
      minimum: 0.1, showSpinner: false, easing: 'ease', trickleSpeed: 500,
    });
    Router.events.on('routeChangeStart', this.routeChangeStarted);
    Router.events.on('routeChangeComplete', this.routeChangeEnded);
    Router.events.on('routeChangeError', this.routeChangeError);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.routeChangeStarted);
    Router.events.off('routeChangeComplete', this.routeChangeEnded);
    Router.events.off('routeChangeError', this.routeChangeError);
  }

  routeChangeStarted = (url) => {
    const { path, dispatch } = this.props;
    if (url === path) {
      this.setState({ sameRoute: true });
    }
    dispatch({ type: 'LOADING', data: true });
    NProgress.start();
    NProgress.inc();
  };

  routeChangeEnded = () => {
    const { sameRoute } = this.state;
    const { dispatch } = this.props;
    if (!sameRoute) {
      this.scrollToTop();
    }
    this.setState({ sameRoute: false });
    dispatch({ type: 'LOADING', data: false });
    NProgress.done();
  };

  routeChangeError = () => {
    NProgress.done();
  };

  scrollToTop = () => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      //
    }
  };

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}
Events.defaultProps = {};
Events.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default Events;
