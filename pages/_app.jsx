import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withReduxStore from "../redux/with-redux-store";
import Events from "../components/system/Events";
import Layout from "../layouts/Main";
import { getLang } from "../services/utils";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, path: ctx.asPath, lang: getLang(ctx.asPath) };
  }

  render() {
    const { Component, pageProps, reduxStore, path, lang } = this.props;
    return (
      <Provider store={reduxStore}>
        <Container>
          <Events {...{ path }} dispatch={reduxStore.dispatch}>
            <Layout>
              <Component {...pageProps} {...{ path, lang }} />
            </Layout>
          </Events>
        </Container>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
