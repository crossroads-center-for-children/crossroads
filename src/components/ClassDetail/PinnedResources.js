import React, { useEffect, useState } from 'react';
import { Box, Chip, Paper, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './PinnedResources.module.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';

const ReactTinyLink = dynamic(() => import('react-tiny-link').then(mod => mod.ReactTinyLink), { ssr: false });

export default function PinnedResources({ resources, pid }) {
  return (
    <Box style={{ maxWidth: 600 }}>
      <Box>
        <Paper>
          <Box className={styles.header}>
            <Typography variant='h5' style={{ fontWeight: 'bold', marginLeft: 10 }}>
              Resources
            </Typography>
            <Link href={`/classes/${pid}/photos`}>
              <a>
                <Typography variant='body1' style={{ color: '#428dfc', marginRight: 10 }}>
                  See All
                </Typography>
              </a>
            </Link>
          </Box>
        </Paper>
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
        {resources.map(resource => (
          <Paper style={{ marginTop: 20, marginRight: 20, marginBottom: 20 }}>
            <Box
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                {resource.shared_by.map(person => (
                  <Box>
                    <img src={person.photo.url} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                  </Box>
                ))}
              </Box>
              <Box>
                {resource.shared_by.length > 1
                  ? resource.shared_by.reduce(
                      (names, person, i) =>
                        (names +=
                          i === resource.shared_by.length - 1
                            ? `${person.firstName} ${person.lastName}`
                            : `${person.firstName} ${person.lastName}, `),
                      ''
                    )
                  : `${resource.shared_by[0].firstName} ${resource.shared_by[0].lastName}`}
              </Box>
            </Box>
            <Typography>{resource.title}</Typography>
            <ReactTinyLink cardSize='small' showGraphic={true} maxLine={2} minLine={1} url={resource.link} />
            <Box style={{ marginTop: 10, marginBottom: 10 }}>
              {resource.tags.map(tag => (
                <Chip size='small' label={tag.tag} style={{ margin: 2 }} />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
