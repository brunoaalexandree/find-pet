import { useTheme } from 'styled-components';
import LogoImg from '../../../../../assets/logo-black.svg';
import { Button } from '../../../../../components/Base/Button';
import { HeartIcon } from '../../../../../components/Icons/HeartIcon';

import { Container, Content, LeftContent, Logo, RightContent } from './styles';

export function Header() {
  const { colors } = useTheme();

  return (
    <Container>
      <Content>
        <LeftContent>
          <Logo src={LogoImg} alt="Finder Pet" />
          <span>let's explore your pet!</span>
        </LeftContent>
        <RightContent>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Button
            icon={<HeartIcon color={colors.gray[400]} size={24} />}
            text="SAVE"
            colorText={colors.gray[400]}
            background={colors.gray[250]}
            width="93px"
            paddingY={8}
            textSizeInRem="0.875rem"
          />
          <Button
            background="transparent"
            text="Login"
            textSizeInRem="1.25rem"
            width="53px"
          />
        </RightContent>
      </Content>
    </Container>
  );
}
