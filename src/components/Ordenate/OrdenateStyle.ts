import styled from "styled-components";

export const Select = styled.select`
  outline: none;
  border: none;
  align-self: center;
  margin-top: 2.5rem;
  padding: 1.25rem;
  width: 12.5rem;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem rgb(0, 0, 0, 0.15);
  border-radius: 0.3125rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;
