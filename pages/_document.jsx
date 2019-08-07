/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { getLang } from '../services/utils';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, asPath }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, lang: getLang(asPath) };
  }

  render() {
    const { lang } = this.props;
    return (
      <html lang={lang}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Cache-Control" content="max-age=0, public" />
          <meta httpEquiv="Expires" content="-1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
