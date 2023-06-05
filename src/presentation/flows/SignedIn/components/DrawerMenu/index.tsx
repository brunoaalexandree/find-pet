import {
  DrawerContainer,
  DrawerContent,
  Overlay,
  ProfileArea,
  ProfileInfo,
  SignOutText,
  SignUpText,
  ToggleButton,
} from './styles';

import { CrossIcon } from '../../../../../components/Icons/CrossIcon';
import { Divider } from '../../../../../components/Base/Divider';
import { Button } from '../../../../../components/Base/Button';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../../../structure/store';
import useLogin from '../../../../hooks/useLogin';

interface IDrawerMenu {
  open: boolean;
  onClose: () => void;
  firstLetter?: string;
  authenticated?: boolean;
}

export function DrawerMenu({ open, onClose, authenticated }: IDrawerMenu) {
  const { onLogout } = useLogin();
  const { colors } = useTheme();
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <ToggleButton onClick={onClose}>
        {open && <CrossIcon color={colors.white} size={32} />}
      </ToggleButton>
      <Overlay open={open} onClick={onClose} />

      <DrawerContainer open={open}>
        <DrawerContent>
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Contact</li>
          </ul>
          <Divider />
          {!authenticated ? (
            <>
              <Button
                background={colors.red[800]}
                colorText={colors.white}
                text="Sign in"
                paddingY={12}
                textSizeInRem="0.875rem"
                width="100%"
                onClick={() => navigate('/login')}
              />
              <Link to="/signup">
                <SignUpText>
                  <span>Not a member?</span> Sign up now
                </SignUpText>
              </Link>
            </>
          ) : (
            <>
              <ProfileArea>
                <span>{user.user_metadata.name.substr(0, 1)}</span>
                <ProfileInfo>
                  <h2>{user.user_metadata.name}</h2>
                  <h3>{user.email}</h3>
                </ProfileInfo>
              </ProfileArea>
              <Divider />
              <SignOutText onClick={() => onLogout()}>Sign Out</SignOutText>
            </>
          )}
        </DrawerContent>
      </DrawerContainer>
    </>
  );
}
