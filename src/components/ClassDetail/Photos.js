import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import styles from './Photos.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Photos({ photos, pid }) {
  return (
    <Paper className={styles.paper}>
      <Box className={styles.header}>
        <Typography variant='h5' style={{ fontWeight: 'bold', marginLeft: 10 }}>
          Photos
        </Typography>
        <Link href={`/classes/${pid}/photos`}>
          <a>
            <Typography variant='body1' style={{ color: '#428dfc', marginRight: 10 }}>
              See All
            </Typography>
          </a>
        </Link>
      </Box>
      <Box className={styles.gallery}>
        {photos.slice(0, 6).map((photo, i) => (
          <Box className={styles.image}>
            <Button>
              <Image
                className={
                  i === 0
                    ? styles['image--top-left']
                    : i === 2
                    ? styles['image--top-right']
                    : i === 3
                    ? styles['image--bottom-left']
                    : i === 5
                    ? styles['image--bottom-right']
                    : styles.image
                }
                src={photo.photo.url}
                width='120px'
                height='120px'
              />
            </Button>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
