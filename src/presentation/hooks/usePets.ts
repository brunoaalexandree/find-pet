import { useQuery } from 'react-query';
import { client } from '../../structure/configs/apollo';
import { GET_PETS } from '../../structure/graphql/queries';

const usePets = () => {
  const getPets = async () => {
    const { data } = await client.query({
      query: GET_PETS,
    });

    return data.petsList;
  };

  return useQuery('pets', getPets);
};

export default usePets;
