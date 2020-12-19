import { gql } from '@apollo/client';
import {
  resourcesFragment,
  photosFragment,
  authorsFragment,
  classesFragment,
  collectionsFragment,
  commentsFragment,
  postsFragment,
  peopleFragment,
} from './fragments';

export const GET_FEATURED_RESOURCES = gql`
  query getFeaturedResources {
    resources(where: { featured: true }) {
      ...ResourcesFragment
    }
  }
  ${resourcesFragment}
`;

export const GET_RESOURCES = gql`
  query getResources {
    resources {
      ...ResourcesFragment
    }
  }
  ${resourcesFragment}
`;

export const GET_CLASSES = gql`
  query getClasses {
    classes {
      ...ClassesFragment
      people {
        ...PeopleFragment
      }
      cover {
        _id
      }
    }
  }
  ${classesFragment}
  ${peopleFragment}
  ${photosFragment}
`;

export const GET_CLASS_POSTS = gql`
  query getClassPosts($id: ID!) {
    class(id: $id) {
      posts {
        ...PostsFragment
      }
    }
  }
  ${postsFragment}
`;

export const GET_CLASS = gql`
  query getClassBySlug($slug: String) {
    classes(where: { slug: $slug }) {
      ...ClassesFragment
      people {
        ...PeopleFragment
      }
      cover {
        _id
      }
      photos(limit: 6) {
        ...PhotosFragment
      }

      posts(limit: 5) {
        ...PostsFragment
      }

      videos(limit: 1) {
        title
        link
        tags {
          tag
        }
      }
    }
  }
  ${classesFragment}
  ${peopleFragment}
  ${photosFragment}
  ${postsFragment}
`;
