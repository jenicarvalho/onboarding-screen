import { Container, Item, Switch, Content, Slider } from './styles';

const Stages = () => {
  return (
    <Container>
      <Item lighter='var(--lighterPurple)' darker='var(--darkerPurple)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightPurple)' color='var(--purple)' />
        </Switch>
        <Content light='var(--lightPurple)' lighter='var(--lighterPurple)' />
      </Item>
      <Item lighter='var(--lighterOrange)' darker='var(--darkerOrange)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightOrange)' color='var(--orange)' />
        </Switch>
        <Content light='var(--lightOrange)' lighter='var(--lighterOrange)' />
      </Item>
      <Item lighter='var(--lighterBlue)' darker='var(--darkerBlue)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightBlue)' color='var(--blue)' />
        </Switch>
        <Content light='var(--lightBlue)' lighter='var(--lighterBlue)' />
      </Item>
      <Item lighter='var(--lighterGreen)' darker='var(--darkerGreen)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightGreen)' color='var(--green)' />
        </Switch>
        <Content light='var(--lightGreen)' lighter='var(--lighterGreen)' />
      </Item>
      <Item lighter='var(--lighterPink)' darker='var(--darkerPink)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightPink)' color='var(--pink)' />
        </Switch>
        <Content light='var(--lightPink)' lighter='var(--lighterPink)' />
      </Item>
      <Item lighter='var(--lighterDisabled)' darker='var(--darkerDisabled)'>
        <strong>Lead</strong>
        <Switch>
          <input type="checkbox" id="lead" />
          <Slider light='var(--lightDisabled)' color='var(--disabled)' />
        </Switch>
        <Content light='var(--lightDisabled)' lighter='var(--lighterDisabled)' />
      </Item>
    </Container>
  );
}

export default Stages;