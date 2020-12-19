import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Header from './Header';
import About from './About';
import Photos from './Photos';
import Posts from './Posts';
import Videos from './Videos';
import Team from './Team';
import PinnedResources from './PinnedResources';

import styles from './index.module.scss';

export default function ClassDetail({ classroom, pid }) {
  console.log(classroom);
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <Box className={styles.header__box}>
        <Box className={styles.cover}></Box>
        <Header name={classroom.name} />
      </Box>

      <Box className={styles.main__box}>
        <Box className={styles['main__box--left']}>
          <About
            content={classroom.content}
            youngest={classroom.youngest}
            oldest={classroom.oldest}
            size={classroom.size}
          />

          <Team team={classroom.people} />

          <Photos photos={classroom.photos} pid={pid} />
          <Videos videos={classroom.videos} pid={pid} />
        </Box>

        <Box className={styles['main__box--right']}>
          <PinnedResources
            pid={pid}
            resources={classroom.people.reduce((accum, person) => (accum = [...accum, ...person.resources_shared]), [])}
          />
          <Posts posts={classroom.posts} pid={pid} />
        </Box>
      </Box>
    </Grid>
  );
}
