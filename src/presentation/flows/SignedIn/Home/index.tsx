import { HomeLayout } from './layout';
import usePets from '../../../hooks/usePets';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../structure/store';

export function Home() {
  const { data, isLoading } = usePets();
  const { session, user, authenticated } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <HomeLayout
      pets={data}
      isLoading={isLoading}
      session={session}
      user={user}
      authenticated={authenticated}
    />
  );
}
