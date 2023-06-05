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
  width: ${({ open }) => (open ? 'calc(100% - 408px)' : '0')};
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: scroll;
  transition: height 0.3s ease;
  z-index: 2;

  border-top-left-radius: 24px;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 979px) {
    height: 100%;
    border-top-left-radius: 0px;
  }
`;

export const DrawerContent = styled.div`
  padding: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 136px;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;

    li {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;

export const SignUpText = styled.p`
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.red[800]};
  font-size: 0.75rem;

  span {
    color: ${(props) => props.theme.colors.text.title};
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 40px;
  left: 32px;
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

export const ProfileArea = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;

  span {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.red[800]};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    font-weight: 700;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text.title};
    font-weight: 600;
  }

  h3 {
    color: ${(props) => props.theme.colors.text.title};
    font-weight: 400;
    font-size: 0.75rem;
  }
`;

export const SignOutText = styled.p`
  text-align: left;
  font-size: 1rem;
  width: 100%;
  color: ${(props) => props.theme.colors.red[800]};
  font-weight: 500;
`;
