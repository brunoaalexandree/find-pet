import { AboutLayout } from './layout';
import usePets from '../../../hooks/usePets';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../structure/store';

export function About() {
  const { favoritePetsData, favoritePetsIsLoading } = usePets();
  const { authenticated } = useSelector((state: RootState) => state.user);

  return (
    <AboutLayout
      isLoading={favoritePetsIsLoading}
      authenticated={authenticated}
      favoritesLength={favoritePetsData?.length}
    />
  );
}
