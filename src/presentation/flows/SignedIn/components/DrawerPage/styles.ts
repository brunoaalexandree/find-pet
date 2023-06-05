import styled from 'styled-components';

interface Props {
  open: boolean;
}
export const Content = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 220px;
`;

export const Overlay = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const DrawerContainer = styled.div<Props>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? 'calc(100% - 60px)' : '0')};
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: scroll;
  transition: height 0.3s ease;
  z-index: 2;

  border-top-left-radius: 24px;

  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  @media only screen and (max-width: 979px) {
    height: 100%;
    border-top-left-radius: 0px;
  }
`;

export const DrawerContent = styled.div`
  padding: 16px;
  height: 100%;
  width: 100%;
  max-width: 1180px;
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 576px;
    margin-top: 120px;
  }

  @media only screen and (max-width: 979px) {
    padding: 120px 24px;
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 3;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 32px;

  @media only screen and (max-width: 979px) {
    i {
      color: #000 !important;
    }
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 3;
`;

export const Title = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    gap: 8px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
      width: 64px;
      height: 64px;
      background-color: ${(props) => props.theme.colors.red[900]};
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 1.25rem;
      }

      p {
        font-size: 1rem;
        margin-top: -5px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const TitleMobile = styled.header`
  display: none;

  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.text.title};
    }

    div {
      display: flex;
      align-items: center;

      gap: 16px;

      span {
        width: 48px;
        height: 48px;
        background: ${(props) => props.theme.colors.red[800]};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
        border-radius: 50%;
      }

      p {
        color: #8b8b8b;
        font-weight: 400;
      }
    }
  }
`;

export const AlsoLikeTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 200px;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const AlsoLike = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 356px);
  gap: 40px;
  margin-top: 32px;
  padding-bottom: 32px;

  @media only screen and (max-width: 979px) {
    grid-template-columns: repeat(auto-fill, 336px);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 344);
  }
`;
