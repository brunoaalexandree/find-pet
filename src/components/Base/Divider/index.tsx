import { Container, Hr } from './styles';

interface DividerProps {
  text?: string;
}

export function Divider({ text }: DividerProps) {
  return text ? (
    <Container>
      <Hr /> <span>{text}</span> <Hr />
    </Container>
  ) : (
    <Hr />
  );
}
