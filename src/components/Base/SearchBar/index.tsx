import { useTheme } from 'styled-components';
import { SearchIcon } from '../../Icons/SearchIcon';
import { Button } from '../Button';
import { Container, Content } from './styles';

export function SearchBar() {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <SearchIcon size={36} color={colors.text.title} />
        <input placeholder="What are you searching for?" />
        <select>
          <option>All pets</option>
          <option>Cats</option>
          <option>Dogs</option>
        </select>

        {/* <Button
            background={colors.red[800]}
            backgroundHover={colors.red[700]}
            colorText={colors.white}
            paddingY={10}
            width="160px"
            text="Search"
            textSizeInRem="1.5rem"
          /> */}
      </Content>
    </Container>
  );
}
