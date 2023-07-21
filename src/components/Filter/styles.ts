import styled, { css } from 'styled-components';
import arrow from '../../assets/arrow.png';
import checkbox from '../../assets/checkbox.png';

interface LabelProps {
  checked: boolean;
}

export const Container = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  width: 210px;
  height: 49px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding-left: 14px;
  cursor: pointer;
  color: var(--darkGray);
  position: relative;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--blue-highlight);
  }

  input[type='checkbox'] {
    margin-right: 18px;
    visibility: hidden;

    &::after {
      content: '';
      display: block;
      visibility: visible;
      width: 17px;
      height: 17px;
      border-radius: 5.25px;
      border: 2px solid #CBD5E0;
      position: relative;
      top: -4px;
    }

    &:checked::after {
      content: '';
      visibility: visible;
      background-image: url(${checkbox});
      background-size: contain;
      background-repeat: no-repeat;
      width: 19px;
      height: 19px;
      display: block;
      position: relative;
      top: -2px;
      border: none;
    }
  }

  ${(props) => props.checked && css`
    border: 2px solid var(--blue-highlight);
    &::after {
      content: '';
      position: absolute;
      background: url(${arrow}) #fff;
      bottom: -15px;
      display: inline-block;
      width: 15px;
      height: 15px;
      left: calc(50% - 10px);
      background-size: contain;
      background-repeat: no-repeat;
    }
  `}

`;

