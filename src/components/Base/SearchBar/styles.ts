import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray[250]};

  padding: 32px;

  -webkit-box-shadow: 0px 0px 200px 0px rgba(243, 243, 243, 1);
  -moz-box-shadow: 0px 0px 200px 0px rgba(243, 243, 243, 1);
  box-shadow: 0px 0px 200px 0px rgba(243, 243, 243, 1);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1104px;
  height: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  SearchIcon {
    width: 32px;
    height: 32px;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0px 8px;
    border: none;
    font-size: 1.25rem;
  }

  select {
    width: 160px;
    height: 32px;
    border: none;
    font-size: 1.25rem;
  }
`;
