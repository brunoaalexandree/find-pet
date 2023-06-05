import { InputHTMLAttributes } from 'react';
import { Container, ErrorMsg, InputForm } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: any;
}

export function Input({ labelText, error, ...props }: InputProps) {
  return (
    <Container>
      <span>{labelText}</span>
      <InputForm error={error ? true : false} {...props} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  );
}
