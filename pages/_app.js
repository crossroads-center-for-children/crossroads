import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { Box } from '@material-ui/core';

import Navbar from '../src/components/Navbar/Navbar';
import { useApollo } from '../lib/apollo';
import theme from '../src/theme';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import '../scss/globals.css';

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    TimeAgo.addDefaultLocale(en);
  }, [en]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Box style={{ marginTop: 120 }}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
