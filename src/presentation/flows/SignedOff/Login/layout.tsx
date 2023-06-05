import { Control, Controller, FieldErrors } from 'react-hook-form';

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
  LeftIconBox,
  LoginForm,
  Options,
  RightContent,
  SocialButtonsContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { LeftIcon } from '../../../../components/Icons/LeftIcon';

interface ILoginLayout {
  control: Control<any>;
  errors: FieldErrors;
  handleSubmit: () => void;
  isLoading: boolean;
}

export function LoginLayout({
  control,
  handleSubmit,
  errors,
  isLoading,
}: ILoginLayout) {
  const { colors } = useTheme();

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
        <LeftIconBox>
          <Link to="/">
            <LeftIcon color="#000" size={24} />
          </Link>
        </LeftIconBox>
        <LoginForm onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                error={errors?.email?.message}
                labelText="Username or Email"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                labelText="Password"
                type="password"
                error={errors?.password?.message}
              />
            )}
          />
          <Button
            text="Sign In"
            paddingY={11}
            background={colors.red[800]}
            colorText={colors.white}
            isLoading={isLoading}
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
          <Link to="/signup">
            <h2>
              <span>Not a member? </span> Sign up now
            </h2>
          </Link>
        </Options>
      </RightContent>
    </Container>
  );
}
