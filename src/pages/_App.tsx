/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import React from 'react';
import { Provider } from 'react-redux';
import App, { AppInitialProps } from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/store';

const store = makeStore;

class SmartNextApp extends App {
    static async getInitialProps({ Component, ctx }): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render(): JSX.Element {
        console.log('Rendering SmartNextApp');
        console.log('Props:');
        console.log(JSON.stringify(this.props));
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(store)(SmartNextApp);
