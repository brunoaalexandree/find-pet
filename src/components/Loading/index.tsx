import Svg from '../../assets/logo-loading.svg';
import { Container, Content } from './style';

export function Loading() {
  return (
    <Container>
      <Content>
        <object type="image/svg+xml" data={Svg}>
          Loading
        </object>
        <p>Carregando...</p>
      </Content>
    </Container>
  );
}
