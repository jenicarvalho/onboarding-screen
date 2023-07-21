import { Container } from './styles';
import logo from '../../assets/logo.svg';
import Nav from '../Nav';
import Button from '../Button';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt='logo' />
      <Nav />
      <Button>
        Next
      </Button>
    </Container>
  );
}

export default Header;