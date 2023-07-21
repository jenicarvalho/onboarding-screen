import styled from 'styled-components';

export const Container = styled.button`
  padding: 13px 21px;
  background-color: var(--blue-highlight);
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 34px;
  border: none;
  font-family: 'Archivo', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--darkBlue-highlight);
  }
`;
