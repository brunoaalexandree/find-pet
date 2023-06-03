import { useForm } from 'react-hook-form';
import { yupResolver as YR } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useRegister from '../../../hooks/useRegister';
import { RegisterLayout } from './layout';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const { signUp } = useRegister();
  const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
    email: Yup.string().required('Informe um email'),
    name: Yup.string().required('Informe o seu nome'),
    username: Yup.string().required('Informe o seu username'),
    password: Yup.string().required('Informe uma senha'),
  });

  const signUpResolver = YR(signUpSchema);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      username: '',
      password: '',
    },
    resolver: signUpResolver,
  });

  async function handleRegister(data: any) {
    await signUp(data);
    navigate('/');
  }

  return (
    <RegisterLayout
      control={control}
      handleSubmit={handleSubmit(handleRegister)}
      errors={errors}
    />
  );
}
