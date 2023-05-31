import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    color: ${(props) => props.theme.colors.gray[450]};
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.gray[450]};
`;
