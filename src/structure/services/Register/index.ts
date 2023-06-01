import { supabase } from '../../configs/supabase';
import { RegisterRequestDTO } from './dtos/RegisterRequest';

class RegisterService {
  public async register(user: RegisterRequestDTO) {
    const response = await supabase.auth.signUp(user);

    return response;
  }
}

export default new RegisterService();
