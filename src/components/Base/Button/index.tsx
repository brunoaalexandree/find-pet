import { ReactNode } from 'react';
import Svg from '../../../assets/logo-loading.svg';
import { Container, LoadingIcon, Text } from './styles';
interface IButton {
  width?: string;
  paddingY?: number;
  background?: string;
  backgroundHover?: string;
  colorText?: string;
  text?: string | ReactNode;
  textSizeInRem?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  weight?: 400 | 500 | 600 | 700;
  disabled?: boolean;
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
  isLoading,
  onClick,
  weight,
  disabled,
}: IButton) {
  return (
    <Container
      background={background}
      backgroundHover={backgroundHover}
      colorText={colorText}
      paddingY={paddingY}
      width={width}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <LoadingIcon type="image/svg+xml" data={Svg}>
          Loading
        </LoadingIcon>
      ) : (
        <>
          {icon && icon}
          <Text sizeInRem={textSizeInRem} weight={weight}>
            {text}
          </Text>
        </>
      )}
    </Container>
  );
}
