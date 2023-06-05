import styled from 'styled-components';

interface ContainerProps {
  background: string;
  cardSize: 'small' | 'large' | 'box';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(props) => (props.cardSize === 'box' ? '374px' : '576px')};
  padding: 32px;

  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  border-radius: 8px;

  grid-row-end: span
    ${(props) =>
      props.cardSize === 'small'
        ? 18
        : props.cardSize === 'large'
        ? 29
        : props.cardSize === 'box' && 10};

  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 24px 32px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text.title};
  text-align: left;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text.body};
  font-weight: 500;
`;
