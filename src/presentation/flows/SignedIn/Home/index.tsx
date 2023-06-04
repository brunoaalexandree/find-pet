import { HomeLayout } from './layout';
import usePets from '../../../hooks/usePets';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../structure/store';

export function Home() {
  const { petsData, favoritePetsData, petsLoading, favoritePetsIsLoading } =
    usePets();
  const { user, authenticated } = useSelector((state: RootState) => state.user);

  return (
    <HomeLayout
      pets={petsData}
      isLoading={petsLoading || favoritePetsIsLoading}
      authenticated={authenticated}
      userId={user.id}
      favoritesPets={favoritePetsData}
      favoritesLength={favoritePetsData?.length}
    />
  );
}
