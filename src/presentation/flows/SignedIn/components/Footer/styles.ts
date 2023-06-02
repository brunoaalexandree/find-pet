import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.colors.gray[100]};
  margin-top: 30px;
`;

export const TopFooter = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[350]};
`;

export const Hashtags = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  overflow: hidden;

  p {
    font-weight: 500;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.gray[800]};
  }
`;

export const SocialMedias = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    flex: 1;
    height: 88px;
    border-left: 1px solid ${(props) => props.theme.colors.gray[350]};
    color: ${(props) => props.theme.colors.gray[800]};
    border-right: 0px;
    border-top: 0px;
    border-bottom: 0px;
    background: transparent;
    font-size: 1.25rem;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 64px;
  padding-top: 248px;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text.title};

    span {
      color: ${(props) => props.theme.colors.red[800]};
    }
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text.title};
  }
`;
