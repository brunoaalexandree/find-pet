import { SearchBar } from '../../../../components/Base/SearchBar';
import { CardFeed } from '../../../../components/CardFeed';
import { Header } from '../components/Header';
import {
  Container,
  SearchBox,
  TopSection,
  GradientEffect,
  Content,
} from './style';

import img01 from '../../../../assets/foto01.png';
import img02 from '../../../../assets/foto02.png';
import img03 from '../../../../assets/foto03.png';

import { FeedContainer } from '../../../../components/FeedContainer/FeedContainer';
import { Footer } from '../components/Footer';

export function HomeLayout() {
  return (
    <>
      <Container>
        <TopSection>
          <Header />
          <SearchBox>
            <SearchBar />
          </SearchBox>
          <GradientEffect />
        </TopSection>
        <Content>
          <FeedContainer>
            <CardFeed
              background={img01}
              cardSize="small"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
            <CardFeed
              background={img02}
              cardSize="large"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
            <CardFeed
              background={img03}
              cardSize="small"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
            <CardFeed
              background={img03}
              cardSize="large"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
            <CardFeed
              background={img02}
              cardSize="small"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
            <CardFeed
              background={img01}
              cardSize="large"
              title="Baxter"
              description="French Bulldoge, 12kg-lbs, caramelo"
            />
          </FeedContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
