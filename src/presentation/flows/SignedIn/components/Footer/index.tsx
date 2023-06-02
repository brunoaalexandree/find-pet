import { Bottom, Container, Hashtags, SocialMedias, TopFooter } from './styles';

export function Footer() {
  return (
    <Container>
      <TopFooter>
        <Hashtags>
          <p>#pupples</p>
          <p>#catlovers</p>
          <p>#kitten</p>
          <p>#doglovers</p>
          <p>#meow</p>
          <p>#puppylove</p>
        </Hashtags>
        <SocialMedias>
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Twitter</button>
        </SocialMedias>
      </TopFooter>
      <Bottom>
        <h1>
          18.313.225 <span>pets</span> for you
        </h1>
        <p>© 2022 All rights reserved.</p>
      </Bottom>
    </Container>
  );
}
