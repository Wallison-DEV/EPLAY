import { createGlobalStyle } from 'styled-components'

export const Cores = {
    branca: '#EEE',
    preto: '#111',
    cinza: '#333',
    verde: '#10AC84',
    cinzaClaro: '#a3a3a3',
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
    background-color: ${Cores.preto};
    color: ${Cores.branca};
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
