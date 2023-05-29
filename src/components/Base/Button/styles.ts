import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  paddingY?: number;
  background?: string;
  backgroundHover?: string;
  colorText?: string;
}

export const Container = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  background: ${(props) => props.background && props.background};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding-top: ${(props) => (props.paddingY ? `${props.paddingY}px` : '30px')};
  padding-bottom: ${(props) =>
    props.paddingY ? `${props.paddingY}px` : '30px'};

  text-align: center;

  border: none;
  border-radius: 8px;

  color: ${(props) => props.colorText && props.colorText};

  transition: 0.2s;

  &:hover {
    ${(props) =>
      props.backgroundHover
        ? `background-color: ${props.backgroundHover}`
        : 'filter: brightness(1.13);'}
  }

  &:active {
    background-color: ${(props) => props.theme.colors.red[900]};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.gray[300]};
    color: ${(props) => props.theme.colors.gray[400]};
  }
`;

interface TextProps {
  sizeInRem?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.sizeInRem ? props.sizeInRem : '1rem')};
  font-weight: bold;
`;
