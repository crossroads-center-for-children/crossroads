import { gql } from '@apollo/client';

export const resourcesFragment = gql`
  fragment ResourcesFragment on Resource {
    title
    description
    link
    tags {
      tag
    }
    shared_by {
      firstName
      lastName
      positions {
        title
        type
      }
      class {
        name
      }
      photo {
        url
      }
    }
  }
`;

export const photosFragment = gql`
  fragment PhotosFragment on Photo {
    tags {
      tag
    }
    posts {
      id
    }
    photo {
      url
    }
  }
`;

export const authorsFragment = gql`
  fragment AuthorsFragment on UsersPermissionsUser {
    person {
      firstName
      lastName
      positions {
        title
      }
      photo {
        url
      }
    }
  }
`;

export const classesFragment = gql`
  fragment ClassesFragment on Class {
    id
    name
    youngest
    oldest
    size
    content
  }
`;

export const collectionsFragment = gql`
  fragment CollectionsFragment on Collection {
    title
    posts {
      id
      title
    }
    cover {
      url
    }
    description
  }
`;

export const commentsFragment = gql`
  fragment CommentFragment on Comment {
    comment
    user {
      username
      photo {
        url
      }
    }
  }
`;

export const postsFragment = gql`
  fragment PostsFragment on Post {
    Title
    Subtitle
    date
    content
    cover {
      url
    }
    tags {
      tag
    }
    comments {
      ...CommentFragment
    }
    authors {
      ...AuthorsFragment
    }
    collections {
      ...CollectionsFragment
    }
    photos {
      photo {
        url
      }
    }

    videos {
      link
      tags {
        tag
      }
      title
    }
  }
  ${commentsFragment}
  ${authorsFragment}
  ${collectionsFragment}
`;

export const peopleFragment = gql`
  fragment PeopleFragment on People {
    firstName
    lastName
    email
    phone
    extension
    photo {
      url
    }
    positions {
      title
    }

    resources_shared {
      title
      link
      tags {
        tag
      }
      shared_by {
        firstName
        lastName
        photo {
          url
        }
      }
    }
  }
`;
