import { Container, Item } from "./styles";

const Nav = () => {
  return (
    <Container>
      <Item selected>
        <a href="#">1</a>
        <span>Sales Pipeline Settings</span>
      </Item>
      <Item>
        <a href="#">2</a>
        <span>Opportunity Details Settings</span>
      </Item>
    </Container>
  );
}

export default Nav;