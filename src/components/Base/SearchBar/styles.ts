import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray[250]};

  /* padding: 32px; */
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1104px;
  height: 64px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  SearchIcon {
    width: 34px;
    height: 34px;
  }

  input {
    width: 100%;
    height: 34px;
    padding: 24px 8px;
    border: none;
  }

  div {
    width: 100%;
    max-width: 328px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    select {
      width: 160px;
      height: 64px;
      border: none;
      font-size: 1rem;
    }
  }
`;
