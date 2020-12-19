import Head from 'next/head';
import Link from 'next/link';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import styles from '../scss/Blog.module.scss';
import React from 'react';
import { FacebookProvider, EmbeddedPost, Like, Page } from 'react-facebook';
import Image from 'next/image';

export default function Blog() {
  return (
    <Box>
      <FacebookProvider appId='206050241131807'>
        <EmbeddedPost href='https://www.facebook.com/crossroadscenterforchildren/posts/3736176983070907' width='500' />
        <Like href='https://www.facebook.com/crossroadscenterforchildren/' colorScheme='dark' showFaces share />
        <EmbeddedPost
          href='https://www.facebook.com/crossroadscenterforchildren/videos/3735934029761869/'
          width='500'
        />

        <Image src='https://crossroads-center-for-children.s3.amazonaws.com/test-image7.jpg' layout='fill' />
        <Page href='https://www.facebook.com/crossroadscenterforchildren' />
      </FacebookProvider>
    </Box>
  );
}
