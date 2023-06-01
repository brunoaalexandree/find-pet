import { useMutation } from 'react-query';
import LoginService from '../../structure/services/Login';
import { LoginRequestDTO } from '../../structure/services/Login/dtos/LoginRequest';

const useLogin = () => {
  const { login } = LoginService;
  const registerMutation = useMutation(login);

  const onLogin = async (user: LoginRequestDTO) => {
    try {
      await registerMutation.mutateAsync(user);
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    isLoading: registerMutation.isLoading,
    error: registerMutation.error,
    onLogin,
  };
};

export default useLogin;
