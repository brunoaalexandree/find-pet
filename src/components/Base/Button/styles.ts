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
`;

interface TextProps {
  sizeInRem?: string;
  weight?: 400 | 500 | 600 | 700;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.sizeInRem ? props.sizeInRem : '1rem')};
  font-weight: ${(props) => (props.weight ? props.weight : '700')};
`;

export const LoadingIcon = styled.object`
  width: 20px;
  height: 20px;
`;
