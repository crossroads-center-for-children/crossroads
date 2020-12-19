import React, { useEffect, useState } from 'react';
import { Box, Chip, Paper, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import ReactTimeAgo from 'react-time-ago';
import styles from './Posts.module.scss';
import Link from 'next/link';
import ReactPlayer from 'react-player';

export default function About({ posts, pid }) {
  const [offset, setOffset] = useState(5);

  const compare = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  console.log(posts);

  return (
    <Box style={{ maxWidth: 600 }}>
      <Box style={{ marginBottom: 20 }}>
        <Paper>
          <Box className={styles.header}>
            <Typography variant='h5' style={{ fontWeight: 'bold', marginLeft: 10 }}>
              Posts
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
      <Box className={styles.root}>
        {posts
          .slice(0)
          .sort(compare)
          .map(post => (
            <Box className={styles.post}>
              <Paper>
                <Box>{post.cover ? <Image src={post.cover.url} layout='fill' /> : null}</Box>
                <Typography variant='body1' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <ReactTimeAgo
                  date={post.date}
                  locale='en-US'
                  style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '0.75rem' }}
                />

                <Box>
                  <Typography variant='body2' style={{ fontFamily: 'Roboto' }}>
                    {post.content}
                  </Typography>
                </Box>

                <Box>
                  {post.photos.map(photo => (
                    <Image src={photo.photo.url} width='40px' height='40px' />
                  ))}
                </Box>

                <Box>
                  {post.videos.length > 0
                    ? post.videos.map(video => <ReactPlayer light url={video.link} width='100%' height='100%' />)
                    : null}
                </Box>

                <Box>
                  {post.authors.map(author => (
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                      <Image src={author.person.photo.url} width='50px' height='50px' className={styles.author__img} />
                      <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                          <Typography style={{ marginRight: 5 }}>{author.person.firstName}</Typography>
                          <Typography>{author.person.lastName}</Typography>
                        </Box>
                        <Typography>{author.person.positions[0].title}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box>
                  {post.tags.map(tag => (
                    <Chip size='small' label={tag.tag} />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
