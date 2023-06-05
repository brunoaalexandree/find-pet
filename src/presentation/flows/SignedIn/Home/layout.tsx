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
  SearchText,
  ResultText,
} from './style';
import usePets from '../../../hooks/usePets';
import { DrawerPage } from '../components/DrawerPage';
import { useState } from 'react';
import { Control, UseFormWatch } from 'react-hook-form';

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
  control: Control;
  textWatch: string;
}

export function HomeLayout({
  pets,
  isLoading,
  authenticated,
  userId,
  favoritesPets,
  favoritesLength,
  control,
  textWatch,
}: IHomeLayout) {
  const { handleAddFavoritePet } = usePets();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedPet, setSelectedPet] = useState<any>(null);

  if (isLoading) {
    return <Loading />;
  }

  function handleOpenDrawerPet(pet: any) {
    setSelectedPet(pet);
    setOpenDrawer(true);
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
            <SearchBar control={control} />
          </SearchBox>
          <SearchText>{textWatch}</SearchText>
          {textWatch && textWatch.length >= 1 && (
            <ResultText>
              <span>some</span> results found this search
            </ResultText>
          )}
          <GradientEffect />
        </TopSection>
        <Content>
          <FeedContainer>
            {pets.map((pet) => (
              <CardFeed
                disabledFavorite={!authenticated}
                key={pet.id}
                background={pet.image}
                cardSize={getRandomSize()}
                title={pet.title}
                description={pet.description}
                onFavorite={() => handleAddFavoritePet(pet.photo_uid, userId)}
                favorited={
                  authenticated
                    ? favoritesPets.some(
                        (favorite: any) => favorite.photo_id === pet.photo_uid
                      )
                    : false
                }
                onClick={() => handleOpenDrawerPet(pet)}
              />
            ))}
            {openDrawer && selectedPet && (
              <DrawerPage
                open={openDrawer}
                title={selectedPet.title}
                description={selectedPet.description}
                author={selectedPet.created_by}
                image={selectedPet.image}
                petSelectedId={selectedPet.id}
                pets={pets}
                onClose={() => setOpenDrawer(false)}
                firstLetter={selectedPet.created_by.substr(0, 1)}
              />
            )}
          </FeedContainer>
        </Content>
      </Container>

      {/* <Footer /> */}
    </>
  );
}
