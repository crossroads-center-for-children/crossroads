import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import ClipLoader from 'react-spinners/ClipLoader';

import Head from 'next/head';

export default function Photos() {
  const router = useRouter();
  const { pid } = router.query;
  console.log(router.query);

  return <Box>{`Photos for classroom ${pid}`}</Box>;
}
