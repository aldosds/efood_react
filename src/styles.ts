import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
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
export const Container = styled.div`
  width: 1024px;
  height: 1290px;
  flex-shrink: 0;
  margin: 0 auto;
  background-color: red;
`
