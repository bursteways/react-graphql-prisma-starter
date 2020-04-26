import App from "next/app";
import React from "react";
import {AppMenu} from "components";
import { withRedux } from "store/withRedux";

// components
import { Meta } from 'components';

// No need for an extra file for this wrapper.
const Layout = withRedux(({ children }) => (
  <>
    <Meta />
    {children}
  </>
));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <AppMenu>
          <Component {...pageProps} />
        </AppMenu>
      </Layout>
    );
  };
};
