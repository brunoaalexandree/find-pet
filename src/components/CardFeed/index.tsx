import { useTheme } from 'styled-components';
import { Button } from '../Base/Button';
import { HeartIcon } from '../Icons/HeartIcon';
import { Card, Container, Description, Title } from './styles';

interface ICardFeed {
  title: string;
  description: string;
  background: string;
  cardSize: 'small' | 'medium' | 'large';
  onFavorite?: () => void;
  favorited?: boolean;
  disabledFavorite?: boolean;
  onClick?: () => void;
}

export function CardFeed({
  title,
  description,
  background,
  cardSize,
  favorited,
  onFavorite,
  disabledFavorite,
  onClick,
}: ICardFeed) {
  const { colors } = useTheme();
  return (
    <Container background={background} cardSize={cardSize} onClick={onClick}>
      <Button
        background={favorited ? colors.red[200] : colors.white}
        width={favorited ? '93px' : '40px'}
        paddingY={8}
        colorText={favorited ? colors.red[900] : colors.text.title}
        text={favorited ? 'SAVE' : <HeartIcon color="" size={24} />}
        icon={favorited && <HeartIcon color="" size={24} />}
        onClick={onFavorite}
        disabled={disabledFavorite}
      />
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Card>
    </Container>
  );
}
