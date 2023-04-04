import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .context {
    width: 62rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .context__leftSide {
      width: 30rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.grey};

      .leftSide__topBar {
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        padding: 1rem;

        .topBar__select {
          width: 70%;
          height: 3rem;
          padding: 1rem;
          margin-right: 1rem;
          border: none;
          border-radius: 1rem;
        }

        .topBar__root {
          width: 30%;
          height: 3rem;
          padding: 1rem;
          border: none;
          border-radius: 1rem;
        }
      }

      .leftSide__textarea {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        font-size: 1rem;
        border: none;
        border-bottom-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        background-color: transparent;
      }
    }

    .rightSide__textarea {
      width: 30rem;
      height: 20rem;
      padding: 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`
