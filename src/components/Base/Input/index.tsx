import { InputHTMLAttributes } from 'react';
import { Container, InputForm } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export function Input({ labelText, ...props }: InputProps) {
  return (
    <Container>
      <span>{labelText}</span>
      <InputForm {...props} />
    </Container>
  );
}
