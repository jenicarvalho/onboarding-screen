import { useState } from 'react';
import Filter from '../../components/Filter';
import Stages from '../../components/Stages';
import { Container, Types } from './styles';
import { FilterOptions } from './types';

const Sales = () => {

  const [selectedType, setSelectedType] = useState<FilterOptions>('Basic');

  const handleFilterChange = (content: FilterOptions) => {
    setSelectedType(content);
  };

  return (
    <Container>
      <h1>Please select the type of sales pipeline that best fits to your company</h1>

      <Types>
        <Filter content='Basic' checked={selectedType === 'Basic'} onChange={() => handleFilterChange('Basic')} />
        <Filter content='Advanced' checked={selectedType === 'Advanced'} onChange={() => handleFilterChange('Advanced')} />
        <Filter content='Expert' checked={selectedType === 'Expert'} onChange={() => handleFilterChange('Expert')} />
        <Filter content='Custom' checked={selectedType === 'Custom'} onChange={() => handleFilterChange('Custom')} />
      </Types>

      <Stages selectedType={selectedType} />
    </Container>
  );
}

export default Sales;