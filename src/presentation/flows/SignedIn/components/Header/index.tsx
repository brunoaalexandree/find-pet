import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../components/Base/Button';
import { HeartIcon } from '../../../../../components/Icons/HeartIcon';

import LogoImg from '../../../../../assets/logo-black.svg';
import {
  Container,
  Content,
  DropDown,
  DropDownContainer,
  LeftContent,
  Logo,
  MenuResponsiveControl,
  ResponsiveControl,
  RightContent,
  UserMenu,
} from './styles';
import { ArrowDownIcon } from '../../../../../components/Icons/ArrowDownIcon';
import useLogin from '../../../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../structure/store';
import { MenuIcon } from '../../../../../components/Icons/MenuIcon';
import { useState } from 'react';
import { DrawerMenu } from '../DrawerMenu';

interface IHeader {
  authenticated: boolean;
  favoritesLength?: number;
}

export function Header({ authenticated, favoritesLength }: IHeader) {
  const { colors } = useTheme();
  const { onLogout } = useLogin();
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleLogout() {
    onLogout();
  }

  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <DrawerMenu
        authenticated={authenticated}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
      <Container>
        <Content>
          <LeftContent>
            <MenuResponsiveControl onClick={() => setOpenDrawer(true)}>
              <MenuIcon color="#000" size={48} />
            </MenuResponsiveControl>
            <Link to="/">
              <Logo src={LogoImg} alt="Finder Pet" />
            </Link>
            <span>let's explore your pet!</span>
          </LeftContent>
          <RightContent>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <li>Contact</li>
            </ul>
            <Button
              icon={
                <HeartIcon
                  color={favoritesLength ? colors.red[800] : colors.gray[400]}
                  size={24}
                />
              }
              text={favoritesLength ? `${favoritesLength} PETS` : 'SAVE'}
              colorText={favoritesLength ? colors.red[800] : colors.gray[400]}
              background={favoritesLength ? colors.red[200] : colors.gray[250]}
              width="93px"
              paddingY={8}
              textSizeInRem="0.875rem"
            />
            <ResponsiveControl>
              {!authenticated ? (
                <Link to="/login">
                  <Button
                    background="transparent"
                    text="Login"
                    textSizeInRem="1.25rem"
                    width="53px"
                    weight={500}
                  />
                </Link>
              ) : (
                <UserMenu>
                  <div>
                    <span>{user.user_metadata.name.substr(0, 1)}</span>
                    <ArrowDownIcon color={colors.text.title} size={32} />
                  </div>
                  <DropDownContainer>
                    <DropDown onClick={() => handleLogout()}>
                      <p>Sair</p>
                    </DropDown>
                  </DropDownContainer>
                </UserMenu>
              )}
            </ResponsiveControl>
          </RightContent>
        </Content>
      </Container>
    </>
  );
}
