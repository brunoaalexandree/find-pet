import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    text-align: center;
    margin-top: 50px;
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  width: 200px;
  height: 200px;
`;
