import { Container } from "./styles";

type Props = {
  content: "Basic" | "Advanced" | "Expert" | "Custom";
  checked?: boolean;
}

const Filter = ({ content, checked = false }: Props) => {
  return (
    <Container checked={checked}>
      <input type="checkbox" id={content} checked={checked} title={content} onChange={() => { }} />
      {content}
    </Container>
  );
}

export default Filter;