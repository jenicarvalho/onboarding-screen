import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Button;