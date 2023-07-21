import styled from 'styled-components';

interface ItemProps {
  color?: string;
  light?: string;
  lighter?: string;
  darker?: string;
}

export const Container = styled.div`
  padding: 69px 129px 12px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 14px;
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  width: 222px;
  height: 558px;
  border-radius: 14px;
  padding: 14px;
  background: ${(props) => props.lighter};
  background: linear-gradient(180deg, ${(props) => props.lighter} 67%, rgba(255,255,255,1) 100%);

  strong {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.darker};
  }
`;

export const Slider = styled.div<ItemProps>`
  width: 114px;
  height: 22px;
  border-radius: 10.5px;
  background-color: ${(props) => props.light};
  top: 0;
  position: absolute;
  cursor: pointer;
  transition: .5s;

  &::before {
    content: "";
    position: absolute;
    width: 42px;
    height: 22px;
    background-color: ${(props) => props.color};
    transition: .5s;
    border-radius: 10.5px;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 114px;
  height: 22px;
  margin-top: 17px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider}::before {
      transform: translateX(71px);
    }
  }
`;

export const Content = styled.div<ItemProps>`
  width: 100%;
  height: 175px;
  margin-top: 10px;
  border-radius: 10.5px;
  border: 1px solid ${(props) => props.light};
  background: ${(props) => props.lighter};
`;