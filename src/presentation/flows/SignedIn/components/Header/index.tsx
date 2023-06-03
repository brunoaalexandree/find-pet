import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../components/Base/Button';
import { HeartIcon } from '../../../../../components/Icons/HeartIcon';

import LogoImg from '../../../../../assets/logo-black.svg';
import profile from '../../../../../assets/foto02.png';
import {
  Container,
  Content,
  DropDown,
  DropDownContainer,
  LeftContent,
  Logo,
  RightContent,
  UserMenu,
} from './styles';
import { ArrowDownIcon } from '../../../../../components/Icons/FacebookIcon copy';
import useLogin from '../../../../hooks/useLogin';

interface IHeader {
  authenticated: boolean;
}

export function Header({ authenticated }: IHeader) {
  const { colors } = useTheme();
  const { onLogout } = useLogin();

  function handleLogout() {
    console.log('aqui');

    onLogout();
  }

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
          {!authenticated ? (
            <Link to="/login">
              <Button
                background="transparent"
                text="Login"
                textSizeInRem="1.25rem"
                width="53px"
              />
            </Link>
          ) : (
            <UserMenu>
              <div>
                <img src={profile} />
                <ArrowDownIcon color={colors.text.title} size={32} />
              </div>
              <DropDownContainer>
                <DropDown onClick={() => handleLogout()}>
                  <p>Sair</p>
                </DropDown>
              </DropDownContainer>
            </UserMenu>
          )}
        </RightContent>
      </Content>
    </Container>
  );
}
