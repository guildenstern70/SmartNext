/*
 *
 * SmartNext
 * A web template project for Next.js
 * Copyright (c) 2020-22 Alessio Saltarin
 * MIT License
 *
 */

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";


// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  fonts: {
    heading: `'Rubik', sans-serif`,
    body: `'Rubik', sans-serif`,
  },
};



const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  );

}

export default MyApp
