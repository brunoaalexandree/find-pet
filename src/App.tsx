import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { SearchBar } from './components/Base/SearchBar';
import { CardFeed } from './components/CardFeed';

import image01 from './assets/foto01.png';
import image02 from './assets/foto02.png';
import image03 from './assets/foto03.png';
import { FeedContainer } from './components/FeedContainer/FeedContainer';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <div style={{ paddingTop: '250px' }}>
        <SearchBar />
      </div>
      <FeedContainer>
        <CardFeed
          cardSize="small"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image01}
        />
        <CardFeed
          cardSize="large"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image02}
        />
        <CardFeed
          cardSize="large"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image01}
        />
        <CardFeed
          cardSize="small"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image02}
        />
        <CardFeed
          cardSize="small"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image03}
        />
        <CardFeed
          cardSize="small"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image01}
        />
        <CardFeed
          cardSize="small"
          title="Baxter"
          description="French Bulldoog, 5-year-old, 12kgs"
          background={image03}
        />
      </FeedContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
