import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import Link from 'next/link';

import styles from './Videos.module.scss';

export default function Videos({ videos, pid }) {
  console.log(videos);
  return (
    <Box className={styles.root}>
      <Paper className={styles.paper}>
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant='h5' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
            Videos
          </Typography>
          <Link href={`/classes/${pid}/videos`}>
            <a>
              <Typography variant='body1' style={{ color: '#428dfc', marginRight: 10 }}>
                See All
              </Typography>
            </a>
          </Link>
        </Box>

        <Box style={{ backgroundColor: 'black', width: '80%', height: '66.67%' }}>
          {videos.map(v => (
            <Box style={{ height: '100%' }}>
              <ReactPlayer url={v.link} width='100%' />

              <Box>
                <Typography variant='caption'>{v.title}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
