import { ReactNode } from 'react';
import { Container } from './styles';

interface IFeedContainer {
  children: ReactNode;
}

export function FeedContainer({ children }: IFeedContainer) {
  return <Container>{children}</Container>;
}
