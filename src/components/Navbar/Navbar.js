import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppBar, Box, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const title = 'Crossroads Center for Children';
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <script
          async
          defer
          crossorigin='anonymous'
          src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=206050241131807&autoLogAppEvents=1'
          nonce='4OYMjj9U'></script>
      </Head>
      <header>
        <AppBar style={{ backgroundColor: '#ffffff' }}>
          <Box className={styles.box}>
            <Image src='/cover2.svg' width='320' height='120' />
            <Typography>Crossroads</Typography>
            <div id='fb-root'>
              <div
                class='fb-login-button'
                data-size='large'
                data-button-type='login_with'
                data-layout='rounded'
                data-auto-logout-link='true'
                data-use-continue-as='true'
                data-width=''></div>
            </div>
          </Box>
        </AppBar>
      </header>
    </Box>
  );
}
