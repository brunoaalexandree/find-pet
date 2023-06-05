import { useTheme } from 'styled-components';
import { SearchIcon } from '../../Icons/SearchIcon';
import { Container, Content } from './styles';
import { Control, Controller, UseFormWatch } from 'react-hook-form';

interface ISearchBar {
  control: Control;
}

export function SearchBar({ control }: ISearchBar) {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <SearchIcon size={36} color={colors.text.title} />
        <Controller
          name="search"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} placeholder="What are you searching for?" />
          )}
        />
        <Controller
          name="tag"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field}>
              <option>All pets</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
            </select>
          )}
        />
      </Content>
    </Container>
  );
}
