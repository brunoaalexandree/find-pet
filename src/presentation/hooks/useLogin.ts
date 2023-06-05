import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import LoginService from '../../structure/services/Login';
import { LoginRequestDTO } from '../../structure/services/Login/dtos/LoginRequest';
import { signin } from '../../structure/store/userSlice';
import { RootState } from '../../structure/store';
import { logout } from '../../structure/store/userSlice';

const useLogin = () => {
  const { login } = LoginService;
  const registerMutation = useMutation(login);

  const dispatch = useDispatch();
  const stateUser = useSelector((state: RootState) => state.user);

  const onLogin = async (user: LoginRequestDTO) => {
    try {
      const { data } = await registerMutation.mutateAsync(user);

      return dispatch(signin(data));
    } catch (error) {
      console.log({ error });
    }
  };

  const onLogout = () => {
    dispatch(logout());
  };

  const getUser = () => {
    return stateUser;
  };

  return {
    isLoading: registerMutation.isLoading,
    error: registerMutation.error,
    onLogin,
    onLogout,
    getUser,
  };
};

export default useLogin;
