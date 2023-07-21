import { Container } from "./styles";

type FilterOptions = "Basic" | "Advanced" | "Expert" | "Custom";

type Props = {
  content: FilterOptions;
  checked: boolean;
  onChange: (content: FilterOptions) => void;
};

const Filter = ({ content, checked, onChange }: Props) => {
  const handleCheckboxChange = () => {
    onChange(content);
  };

  return (
    <Container checked={checked}>
      <input type="checkbox" id={content} checked={checked} onChange={handleCheckboxChange} />
      {content}
    </Container>
  );
};

export default Filter;