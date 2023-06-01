import { useForm } from 'react-hook-form';
import useRegister from '../../../hooks/useRegister';
import { RegisterLayout } from './layout';

export function Register() {
  const { signUp } = useRegister();

  const { handleSubmit, control } = useForm();

  async function handleRegister(data: any) {
    await signUp(data);
  }

  return (
    <RegisterLayout
      control={control}
      handleSubmit={handleSubmit(handleRegister)}
    />
  );
}
