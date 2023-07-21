import styled, { css } from 'styled-components';

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 17.5px;
    text-align: center;
    font-size: 17.5px;
    letter-spacing: 0.35px;
    border: 1px solid;    
    background-color: #fff;
    color: var(--black);
    border-color: #BFCFE0;
    margin-bottom: 3px;
    ${(props) => props.selected && css`
      background-color: var(--darkGray);
      color: #fff;
      border-color: transparent;
    `}

   ${(props) => !props.selected && css`
      &:hover {
        background-color: var(--lightGray);
      }
    `}
  }

  span {
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 10.5px;
    font-weight: 700;
  }

  & + & {
    margin-left: 42px;
  }
`;