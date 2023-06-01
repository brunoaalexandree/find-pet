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
    }
  }
`;
