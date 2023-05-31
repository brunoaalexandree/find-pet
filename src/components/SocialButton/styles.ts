import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray[900]};
  border-radius: 8px;
  background-color: transparent;
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  width: 80%;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray[900]};
  text-align: center;
`;
