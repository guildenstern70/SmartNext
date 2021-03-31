/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21-21.
 * MIT License - See LICENSE file
 */

import 'semantic-ui-css/semantic.min.css';
import { AppProps } from 'next/app';
import React from 'react';

function App({ Component, pageProps }: AppProps): React.ReactNode {
    return <Component {...pageProps} />;
}

export default App;
