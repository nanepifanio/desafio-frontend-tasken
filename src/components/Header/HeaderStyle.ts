import styled from "styled-components";

type HeaderStyleProps = {
  theme: string;
};

export const HeaderStructure = styled.header<HeaderStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem calc((100% - 90rem) / 2);
  background-color: transparent;
  /* background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")}; */
  box-shadow: 0 0 0.1875rem rgb(0, 0, 0, 0.3);

  h1 {
    margin-left: 1.25rem;
    font-size: 1.5625rem;
    font-weight: 800;
    /* color: ${(props) => (props.theme === "light" ? "#000" : "#fff")}; */
    @media (max-width: 31.25rem) {
      font-size: 1rem;
    }
  }
`;

export const DarkModeArea = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right: 1.25rem;
  cursor: pointer;

  @media (max-width: 31.25rem) {
    font-size: 0.8125rem;
  }
`;

export const DarkModeIcon = styled.img`
  max-width: 0.9375rem;
  margin-right: 0.625rem;
`;
