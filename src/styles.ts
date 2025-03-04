import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelha: '#E66767',
  begeEscura: '#FFEBD9',
  begeClara: '#FFF8F2',
  branca: '#fff',
  amarela: '#FFB930'
}

export const breackpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.begeClara};
    color: ${cores.vermelha};
  }
  .container {
    width: 1024px;
    flex-shrink: 0;
    margin: 0 auto;

    @media (max-width: ${breackpoints.desktop}) {
    max-width: 80%;
  }

    @media (max-width: ${breackpoints.tablet}) {
      width: 80%;
      margin: auto;
    }
  }
`
export const Container = styled.div`
  width: 1024px;
  flex-shrink: 0;
  margin: 0 auto;

  @media (max-width: ${breackpoints.tablet}) {
    max-width: 100%;
  }
`
