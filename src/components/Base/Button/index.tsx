import { ReactNode } from 'react';
import { Container, Text } from './styles';
interface IButton {
  width?: string;
  paddingY?: number;
  background?: string;
  backgroundHover?: string;
  colorText?: string;
  text?: string;
  textSizeInRem?: string;
  icon?: ReactNode;
}

export function Button({
  width,
  background,
  backgroundHover,
  colorText,
  paddingY,
  text,
  textSizeInRem,
  icon,
}: IButton) {
  return (
    <Container
      background={background}
      backgroundHover={backgroundHover}
      colorText={colorText}
      paddingY={paddingY}
      width={width}
    >
      {icon && icon}
      <Text sizeInRem={textSizeInRem}>{text}</Text>
    </Container>
  );
}
