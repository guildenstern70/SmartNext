/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import React from "react";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";

const store = makeStore;

class SmartNextApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        console.log('Rendering SmartNextApp');
        console.log('Props:');
        console.log(JSON.stringify(this.props));
        // @ts-ignore
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(store)(SmartNextApp);
