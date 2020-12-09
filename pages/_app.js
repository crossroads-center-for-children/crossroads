import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { Box } from '@material-ui/core';

import Navbar from '../src/components/Navbar/Navbar';
import { useApollo } from '../lib/apollo';
import theme from '../src/theme';
import '../scss/globals.css';

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head></Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Box style={{ marginTop: 150 }}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
