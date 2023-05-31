import { useForm } from 'react-hook-form';

import { Input } from '../../../../components/Base/Input';
import { useTheme } from 'styled-components';
import { Button } from '../../../../components/Base/Button';
import { Divider } from '../../../../components/Base/Divider';
import { SocialButton } from '../../../../components/SocialButton';

import Logo from '../../../../assets/logo.svg';
import { GoogleIcon } from '../../../../components/Icons/GoogleIcon';
import { FacebookIcon } from '../../../../components/Icons/FacebookIcon';
import { TwitterIcon } from '../../../../components/Icons/TwitterIcon';

import {
  Container,
  LeftContent,
  LoginForm,
  Options,
  RightContent,
  SocialButtonsContainer,
} from './styles';

export function LoginLayout() {
  const { handleSubmit } = useForm();
  const { colors } = useTheme();

  function handleLogin(data: any) {
    console.log({ data });
  }

  return (
    <Container>
      <LeftContent>
        <img src={Logo} alt="Finder Pet" />
        <h1>
          18.313.224 <span>pets </span>
          for you
        </h1>
        <p>
          A variety of images of pets from around the world for you to find and
          love.
        </p>
      </LeftContent>
      <RightContent>
        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <h1>Sign In</h1>
          <Input labelText="Username or Email" />
          <Input labelText="Password" type="password" />
          <Button
            text="Sign In"
            paddingY={11}
            background={colors.red[800]}
            colorText={colors.white}
          />
        </LoginForm>

        <Options>
          <h2>Forgot your password?</h2>
          <Divider text="OR" />
          <SocialButtonsContainer>
            <SocialButton
              text="Continue with Google"
              icon={<GoogleIcon size={24} color={colors.gray[900]} />}
            />
            <SocialButton
              text="Continue with Facebook"
              icon={<FacebookIcon size={24} color={colors.gray[900]} />}
            />
            <SocialButton
              text="Continue with Twitter"
              icon={<TwitterIcon size={24} color={colors.gray[900]} />}
            />
          </SocialButtonsContainer>
          <h2>
            <span>Not a member? </span> Sign up now
          </h2>
        </Options>
      </RightContent>
    </Container>
  );
}
