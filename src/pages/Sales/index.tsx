import Filter from "../../components/Filter";
import Stages from "../../components/Stages";
import { Container, Types } from "./styles";

const Sales = () => {
  return (
    <Container>
      <h1>Please select the type of sales pipeline that best fits to your company</h1>

      <Types>
        <Filter content="Basic" checked />
        <Filter content="Advanced" />
        <Filter content="Expert" />
        <Filter content="Custom" />
      </Types>

      <Stages />
    </Container>
  );
}

export default Sales;