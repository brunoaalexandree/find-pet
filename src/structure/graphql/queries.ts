import { gql } from '@apollo/client';

export const GET_PETS = gql`
  query getPetsList {
    petsList {
      created_at
      created_by
      description
      id
      image
      title
      photo_uid
      tag
    }
  }
`;

export const FAVORITE_PET = gql`
  mutation setFavoritePet($photo_id: ID!, $user_id: ID!) {
    insertFavorites(photo_id: $photo_id, user_id: $user_id) {
      id
      photo_id
      user_id
    }
  }
`;
