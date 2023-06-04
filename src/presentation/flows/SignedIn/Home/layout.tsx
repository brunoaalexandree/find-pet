import { SearchBar } from '../../../../components/Base/SearchBar';
import { CardFeed } from '../../../../components/CardFeed';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FeedContainer } from '../../../../components/FeedContainer/FeedContainer';
import { Loading } from '../../../../components/Loading';
import getRandomSize from '../../../../utils/getRandomSizes';
import {
  Container,
  SearchBox,
  TopSection,
  GradientEffect,
  Content,
} from './style';
import usePets from '../../../hooks/usePets';

interface IHomeLayout {
  pets: {
    id: string;
    image: string;
    title: string;
    photo_uid: string;
    description: string;
    created_at: string;
    created_by: string;
  }[];
  isLoading: boolean;
  authenticated: boolean;
  userId: string;
  favoritesPets: any;
  favoritesLength?: number;
}

export function HomeLayout({
  pets,
  isLoading,
  authenticated,
  userId,
  favoritesPets,
  favoritesLength,
}: IHomeLayout) {
  const { handleAddFavoritePet } = usePets();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <TopSection>
          <Header
            authenticated={authenticated}
            favoritesLength={authenticated ? favoritesLength : undefined}
          />
          <SearchBox>
            <SearchBar />
          </SearchBox>
          <GradientEffect />
        </TopSection>
        <Content>
          <FeedContainer>
            {pets.map((pet) => (
              <CardFeed
                key={pet.id}
                background={pet.image}
                cardSize={getRandomSize()}
                title={pet.title}
                description={pet.description}
                onFavorite={() => handleAddFavoritePet(pet.photo_uid, userId)}
                favorited={
                  authenticated &&
                  favoritesPets.some(
                    (favorite: any) => favorite.photo_id === pet.photo_uid
                  )
                }
              />
            ))}
          </FeedContainer>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
