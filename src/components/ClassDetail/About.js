import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function About({ content, youngest, oldest, size }) {
  return (
    <Box className={styles.root}>
      <Paper>
        <Typography variant='h5' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          About
        </Typography>

        <FontAwesomeIcon icon={faInfoCircle} size='lg' color='#959595' />
        <Typography>{content}</Typography>
        <Typography>{youngest}</Typography>
        <Typography>{oldest}</Typography>
        <Typography>{size}</Typography>
      </Paper>
    </Box>
  );
}
