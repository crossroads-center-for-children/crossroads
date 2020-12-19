import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_CLASS } from '../../src/graphql/queries';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import ClassDetail from '../../src/components/ClassDetail';
import GridLoader from 'react-spinners/GridLoader';
import styles from './[pid].module.scss';

export default function Class() {
  const router = useRouter();
  const { pid } = router.query;

  const [classroom, setClassroom] = useState(null);

  const { loading, error, data } = useQuery(GET_CLASS, { variables: { slug: pid } });

  useEffect(() => {
    if (data && data.classes.length > 0) {
      setClassroom(data.classes[0]);
    }
  });

  if (loading)
    return (
      <Box className={styles.loading__box}>
        <GridLoader loading={loading} size={30} color={'#B39DDB'} />
      </Box>
    );

  if (error || (data && data.classes.length === 0)) {
    return (
      <Box>
        <Head>
          <meta name='robots' content='noindex' />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </Box>
    );
  }

  if (!loading && !classroom) return null;

  return (
    <Box>
      <ClassDetail classroom={classroom} pid={pid} />
    </Box>
  );
}
