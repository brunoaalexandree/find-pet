import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Loading } from '../../../../components/Loading';
import {
  Container,
  TopSection,
  Content,
  TextContent,
  ImgContent,
} from './style';

interface IAboutLayout {
  isLoading: boolean;
  authenticated: boolean;
  favoritesLength?: number;
}

import imagesAbout from '../../../../assets/images_about.png';

export function AboutLayout({
  isLoading,
  authenticated,
  favoritesLength,
}: IAboutLayout) {
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
        </TopSection>
        <Content>
          <TextContent>
            <h1>Find Your Perfect Companion</h1>
            <p>
              At Finder Pet, we believe that every animal deserves a loving home
              and proper care. With a wide variety of options, including dogs,
              cats, birds, and exotic animals, we are committed to assisting you
              in finding the ideal pet to match your needs and lifestyle.
            </p>
          </TextContent>
          <ImgContent>
            <img src={imagesAbout} />
          </ImgContent>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
