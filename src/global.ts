import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --lightGray: #EDF2F7;
    --darkGray: #2D3748;
    --black: #062952;
    --blue-highlight: #2462D1;
    --darkBlue-highlight: #1c51b0;

    --Purple: #DABFFF;
    --lightPurple: #E9D9FF;
    --lighterPurple: #F7F1FF;
    --darkerPurple: #46426D;

    --Orange: #FFD6B3;
    --lightOrange: #FFE4CC;
    --lighterOrange: #FEF6EF;
    --darkerOrange: #66421F;

    --Blue: #99D1FF;
    --lightBlue: #BFE3FF;
    --lighterBlue: #E6F4FF;
    --darkerBlue: #003A66;

    --Green: #81DDE5;
    --lightGreen: #AAECF2;
    --lighterGreen: #DEF5F7;
    --darkerGreen: #2A5154;

    --Pink: #FFBFD2;
    --lightPink: #FFD9E4;
    --lighterPink: #FFF2F6;
    --darkerPink: #773A47;

    --Disabled: #CBD5E0;
    --lightDisabled: #E2E8F0;
    --lighterDisabled: #F2F7FA;
    --darkerDisabled: #4A5568;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: 'Archivo', sans-serif;
    color: var(--black);
  }

  a {
    text-decoration: none;
  }
`

export const Main = styled.main`
  background: var(--lightGray);
  height: 100vh;
`

export const Settings = styled.div`
  margin: 0 10px 10px;
  border-radius: 21px;
  background: #fff;
  padding: 42px 0 12px;
  overflow-x: scroll;
`