import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import styles from './Team.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Team({ team }) {
  return (
    <Box className={styles.root}>
      <Paper>
        <Typography variant='h5' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Team
        </Typography>

        <Box>
          {team.map(person => (
            <Box style={{ display: 'flex', flexDirection: 'row' }}>
              <Box>
                <Image src={person.photo.url} width='50px' height='50px' className={styles.person__img} />
              </Box>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography style={{ marginRight: 5 }}>{person.firstName}</Typography>
                  <Typography>{person.lastName}</Typography>
                </Box>
                <Box>
                  {person.positions.map(position => (
                    <Typography>{position.title}</Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
