import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';

import { GET_FEATURED_RESOURCES } from '../../graphql/queries';
import { Box, Button, Chip, Paper, Typography } from '@material-ui/core';

const ReactTinyLink = dynamic(() => import('react-tiny-link').then(mod => mod.ReactTinyLink), { ssr: false });

export default function ResourcesList(props) {
  const { loading, error, data } = useQuery(GET_FEATURED_RESOURCES);

  if (error) return 'Error loading resources';
  if (loading) return 'Fetching resources';

  return (
    <Box>
      {data.resources.map(resource => (
        <Paper style={{ margin: 20, width: 600, height: 600 }}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
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
          <ReactTinyLink cardSize='large' showGraphic={true} maxLine={2} minLine={1} url={resource.link} />
          <Box>
            {resource.tags.map(tag => (
              <Chip label={tag.tag} />
            ))}
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
