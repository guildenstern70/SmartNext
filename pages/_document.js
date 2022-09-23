/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";
import {CssBaseline} from "@nextui-org/react";

class SmartNextDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default SmartNextDocument;


