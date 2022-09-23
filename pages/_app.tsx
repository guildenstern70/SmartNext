/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */


import { NextUIProvider } from '@nextui-org/react';

// Do not modify this file

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}

export default MyApp;

