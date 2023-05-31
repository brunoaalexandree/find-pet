import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.title};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.gray[250]};
  padding: 8px;
`;
