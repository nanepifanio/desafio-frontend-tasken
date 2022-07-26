import styled from "styled-components";

interface LoadingProps {
  theme: string;
}

export const LoadingStructure = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: inherit;
    border: ${({ theme }) =>
      theme === "light" ? "5px solid #ccc" : "5px solid #fff"};
    border-left: ${({ theme }) =>
      theme === "light" ? "5px solid #333" : "5px solid #ccc"};
    animation: loading 0.8s infinite forwards;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
