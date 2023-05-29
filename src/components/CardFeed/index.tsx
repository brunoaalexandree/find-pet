import { Card, Container, Description, Title } from './styles';

interface ICardFeed {
  title: string;
  description: string;
  background: string;
  cardSize: 'small' | 'large';
}

export function CardFeed({
  title,
  description,
  background,
  cardSize,
}: ICardFeed) {
  return (
    <Container background={background} cardSize={cardSize}>
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Card>
    </Container>
  );
}
