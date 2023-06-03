import { Controller, useForm } from 'react-hook-form';

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
  RegisterForm,
  Options,
  RightContent,
  SocialButtonsContainer,
} from './styles';

interface IRegisterLayout {
  handleSubmit: () => void;
  control: any;
}

export function RegisterLayout({ handleSubmit, control }: IRegisterLayout) {
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
        <RegisterForm onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} labelText="Email address" type="email" />
            )}
          />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} labelText="Name" />}
          />
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} labelText="Username" />}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} labelText="Password" type="password" />
            )}
          />
          <h2>
            <span>
              By clicking the “Sign up” button, you agree to Finder Pet
            </span>{' '}
            Terms of Service <span>and confirm that you have read our </span>
            Privacy Policy.
          </h2>
          <Button
            text="Sign up"
            paddingY={11}
            background={colors.red[800]}
            colorText={colors.white}
          />
        </RegisterForm>

        <Options>
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
