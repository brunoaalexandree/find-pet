import { useMutation } from 'react-query';
import RegisterService from '../../structure/services/Register';
import { RegisterRequestDTO } from '../../structure/services/Register/dtos/RegisterRequest';

const useRegister = () => {
  const { register } = RegisterService;
  const registerMutation = useMutation(register);

  const signUp = async (user: RegisterRequestDTO) => {
    try {
      await registerMutation.mutateAsync(user);
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    isLoading: registerMutation.isLoading,
    error: registerMutation.error,
    signUp,
  };
};

export default useRegister;
