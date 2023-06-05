import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver as YR } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { LoginLayout } from './layout';
import useLogin from '../../../hooks/useLogin';
import { useState } from 'react';

export function Login() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Informe o email.'),
    password: Yup.string().required('Informe a senha.'),
  });

  const loginResolver = YR(loginSchema);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: loginResolver,
  });

  const { onLogin, isLoading } = useLogin();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  async function handleLogin(dataForm: any) {
    const res = await onLogin(dataForm);

    if (res?.payload.session !== null) {
      navigate('/');
    } else {
      setLoginError(true);
    }
  }

  return (
    <LoginLayout
      control={control}
      handleSubmit={handleSubmit(handleLogin)}
      errors={errors}
      isLoading={isLoading}
      loginError={loginError}
    />
  );
}
