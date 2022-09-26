/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */


import { NextUIProvider } from '@nextui-org/react';
import { SessionContext } from "../types/SessionContext";
import { Session } from "../types/Session";

// Do not modify this file

// @ts-ignore
function MyApp({ Component, pageProps }) {

  return (

        <NextUIProvider>
          <SessionContext.Provider value={new Session()}>
            <Component {...pageProps} />
          </SessionContext.Provider>
        </NextUIProvider>

    );
}

export default MyApp;

