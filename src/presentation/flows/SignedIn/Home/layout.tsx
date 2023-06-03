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

interface IHomeLayout {
  pets: {
    id: string;
    image: string;
    title: string;
    description: string;
    created_at: string;
    created_by: string;
  }[];
  isLoading: boolean;
  session: any;
  user: any;
  authenticated: boolean;
}

export function HomeLayout({
  pets,
  isLoading,
  user,
  session,
  authenticated,
}: IHomeLayout) {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <TopSection>
          <Header authenticated={authenticated} />
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
              />
            ))}
          </FeedContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
