import { supabase } from '../../configs/supabase';
import { RegisterRequestDTO } from './dtos/RegisterRequest';

class RegisterService {
  public async register(user: RegisterRequestDTO) {
    const response = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          name: user.name,
          username: user.username,
        },
      },
    });

    return response;
  }
}

export default new RegisterService();
