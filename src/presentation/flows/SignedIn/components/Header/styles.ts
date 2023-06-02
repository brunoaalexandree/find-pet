import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 56px 64px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1792px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RightContent = styled.div`
  width: 100%;
  max-width: 655px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 32px;

    li {
      font-size: 1.25rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.text.title};
    }
  }
`;

export const Logo = styled.img``;
