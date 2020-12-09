import React from 'react';
import ResourcesList from '../src/components/ResourcesList';
import { Box, Typography } from '@material-ui/core';
export default function Resources() {
  return (
    <Box>
      <Typography>Resources</Typography>
      <ResourcesList />
    </Box>
  );
}
