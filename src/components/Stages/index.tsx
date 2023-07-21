import { Container, Item, Switch, Content, Slider } from './styles';

type Props = {
  selectedType: string;
}

const Stages = ({ selectedType }: Props) => {
  const stagesByFilter: Record<string, string[]> = {
    Basic: ["Lead", "Submitted"],
    Advanced: ["Lead", "RFP In Progress", "Submitted"],
    Custom: ["Lead", "RFP In Progress", "Submitted", "Closed"],
    Expert: ["Lead", "RFP In Progress", "Submitted", "Won", "Lost", "Closed"],
  };

  const stagesToShow = stagesByFilter[selectedType] || [];

  return (
    <Container>
      {stagesToShow.map((stage) => (
        <Item key={stage} color={stageColorMap[stage]}>
          <strong>{stage}</strong>
          <Switch>
            <input type="checkbox" title={stage} />
            <Slider color={stageColorMap[stage]} />
          </Switch>
          <Content color={stageColorMap[stage]} />
        </Item>
      ))}
    </Container>
  );
}

const stageColorMap: Record<string, 'Purple' | 'Orange' | 'Blue' | 'Green' | 'Pink' | 'Disabled'> = {
  Lead: 'Purple',
  'RFP In Progress': 'Orange',
  Submitted: 'Blue',
  Won: 'Green',
  Lost: 'Pink',
  Closed: 'Disabled',
};


export default Stages;
