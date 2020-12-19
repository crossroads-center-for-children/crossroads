import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppBar, Box, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const title = 'Crossroads Center for Children';

  const links = ['Giving', 'About', 'Team', 'Classes', 'Events', 'Resources', 'Blog'];
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

      <AppBar>
        <Box className={styles.main}>
          <Link href='/'>
            <a>
              <Image src='/logo-text.svg' width='320' height='120' />
            </a>
          </Link>
          <Box className={styles.right}>
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

            <Box className={styles.links}>
              {links.map(link => (
                <Link href={`/${link.toLowerCase()}`}>
                  <a>
                    <Typography
                      variant='body1'
                      className={styles.link}
                      style={{ fontSize: '1.75rem', margin: 8, fontWeight: 'bold' }}>
                      {link}
                    </Typography>
                  </a>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
