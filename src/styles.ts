import { createGlobalStyle } from 'styled-components'

export const Colors = {
    white: '#EEE',
    black: '#111',
    gray: '#333',
    green: '#10AC84',
    lightGray: '#a3a3a3',
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
}

export const EstiloGlobal = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${Colors.black};
    color: ${Colors.white};
    padding-top: 40px;
  }
  .container { 
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
    @media (max-width: ${breakpoints.tablet}){}
  }
`
