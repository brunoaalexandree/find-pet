import { supabase } from '../../configs/supabase';
import { LoginRequestDTO } from './dtos/LoginRequest';

class LoginService {
  public async login(user: LoginRequestDTO) {
    const response = await supabase.auth.signInWithPassword(user);

    return response;
  }
}

export default new LoginService();
