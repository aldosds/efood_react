import { createGlobalStyle } from 'styled-components'

const cores = {
  vermelha: '#E66767',
  begeEscura: '#FFEBD9',
  begeClara: '#FFF8F2',
  branca: '#fff',
  amarela: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.begeClara};
    color: ${cores.vermelha};
  }
`
