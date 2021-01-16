import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import '../assets/css/main.css';

import '../utils/i18n';

import { initStore } from '../utils/redux';

const isDev = process.env.NODE_ENV === 'development';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: isDev })(MyApp);
