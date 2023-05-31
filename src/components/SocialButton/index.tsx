import { ReactNode } from 'react';
import { Container, Icon, Text } from './styles';

interface SocialButtonProps {
  text: string;
  icon: ReactNode;
}

export function SocialButton({ text, icon }: SocialButtonProps) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Container>
  );
}
