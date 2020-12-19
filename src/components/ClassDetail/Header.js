import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import styles from './Header.module.scss';

export default function Header({ name }) {
  return (
    <Box className={styles.root}>
      <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#212121' }} variant='h3'>
        {name}
      </Typography>
    </Box>
  );
}
