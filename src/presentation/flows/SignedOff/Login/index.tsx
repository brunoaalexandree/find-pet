import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver as YR } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { LoginLayout } from './layout';
import useLogin from '../../../hooks/useLogin';

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

  const { onLogin, error } = useLogin();
  const navigate = useNavigate();

  async function handleLogin(dataForm: any) {
    await onLogin(dataForm);

    if (!error) {
      navigate('/');
    }
  }

  return (
    <LoginLayout
      control={control}
      handleSubmit={handleSubmit(handleLogin)}
      errors={errors}
    />
  );
}
