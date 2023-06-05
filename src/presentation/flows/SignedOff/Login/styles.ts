import styled from 'styled-components';

import backgroundImage from '../../../../assets/background.png';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 979px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 96px 88px 0px;

  img {
    width: 100%;
    max-width: 153px;
    margin-bottom: 40px;
  }

  h1 {
    width: 100%;
    max-width: 496px;
    font-size: 4rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray[200]};

    span {
      color: ${(props) => props.theme.colors.red[800]};
      text-decoration: none;
    }

    margin-bottom: 16px;
  }

  p {
    width: 100%;
    max-width: 496px;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray[200]};
  }

  @media only screen and (max-width: 979px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  width: 35%;
  height: 100vh;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 979px) {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text.title};
    margin-bottom: 56px;
  }

  Button {
    margin-top: 40px;
    margin-bottom: -24px;
  }
`;

export const LeftIconBox = styled.div`
  width: 100%;
  height: 24px;
  padding: 24px;
`;

export const Options = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.red[800]};
    margin-bottom: 40px;

    span {
      color: ${(props) => props.theme.colors.text.title};
    }
  }
`;

export const SocialButtonsContainer = styled.div`
  width: 320px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 32px;
`;
