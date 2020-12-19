import React from 'react';

import ClassesTabs from '../src/components/tabs/ClassesTabs';

import { Box, Typography } from '@material-ui/core';

export default function Classes() {
  return (
    <Box>
      <Typography>Classes</Typography>
      <ClassesTabs />
    </Box>
  );
}
