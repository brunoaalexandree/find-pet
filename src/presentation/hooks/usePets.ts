import { useMutation, useQuery } from 'react-query';
import { client } from '../../structure/configs/apollo';
import { FAVORITE_PET, GET_PETS } from '../../structure/graphql/queries';
import { supabase } from '../../structure/configs/supabase';
import { useSelector } from 'react-redux';
import { RootState } from '../../structure/store';

const usePets = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const getPets = async () => {
    const { data } = await client.query({
      query: GET_PETS,
    });

    return data.petsList;
  };

  const { data, error, isLoading } = useQuery('pets', getPets, {
    staleTime: 0,
  });

  const addFavoritePet = async (variables: {
    photo_id: string;
    user_id: string;
  }) => {
    const { data } = await client.mutate({
      mutation: FAVORITE_PET,
      variables,
    });

    return data.insertFavorites;
  };

  const { mutateAsync: favoritePet } = useMutation(addFavoritePet);

  const handleAddFavoritePet = async (photo_id: string, user_id: string) => {
    try {
      const variables = {
        photo_id,
        user_id,
      };

      await favoritePet(variables);
    } catch (error) {
      console.log({ error });
    }
  };

  const getFavoritePetByUser = async () => {
    const { data, error } = await supabase
      .from('Favorites')
      .select('photo_id')
      .eq('user_id', user.id);

    if (error) {
      throw new Error('Error fetching favorites.');
    }

    return data;
  };

  const { data: favoritePetsData, isLoading: favoritePetsIsLoading } = useQuery(
    'favorites',
    getFavoritePetByUser,
    {
      staleTime: 0,
    }
  );

  return {
    petsData: data,
    petsError: error,
    petsLoading: isLoading,
    handleAddFavoritePet,
    favoritePetsData,
    favoritePetsIsLoading,
  };
};

export default usePets;
