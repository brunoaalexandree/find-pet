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

export const DropDown = styled.div`
  display: none !important;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 32px;
  p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDown} {
    display: block;
  }
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

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  position: relative;

  div {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${DropDownContainer} ${DropDown} {
      display: block !important;
      cursor: pointer;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const Logo = styled.img``;
