import { HomeLayout } from './layout';
import usePets from '../../../hooks/usePets';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../structure/store';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

export function Home() {
  const { petsData, favoritePetsData, petsLoading, favoritePetsIsLoading } =
    usePets();
  const { user, authenticated } = useSelector((state: RootState) => state.user);

  const { control, watch } = useForm();

  const textWatcher = watch('search');
  const tagWatcher = watch('tag');
  const [debouncedText] = useDebounce(textWatcher, 1000);

  const filteredPets =
    tagWatcher && tagWatcher !== 'All pets'
      ? petsData.filter((pet: any) => pet.tag === tagWatcher)
      : petsData;

  return (
    <HomeLayout
      pets={filteredPets}
      isLoading={petsLoading || favoritePetsIsLoading}
      authenticated={authenticated}
      userId={user.id}
      favoritesPets={favoritePetsData}
      favoritesLength={favoritePetsData?.length}
      control={control}
      textWatch={debouncedText}
    />
  );
}
