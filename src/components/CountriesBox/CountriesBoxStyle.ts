import styled from "styled-components";

export const CountriesBoxStructure = styled.div`
  max-height: 18.75rem;
  border-radius: 0.3125rem;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem rgb(0, 0, 0, 0.1);
  transition: all ease 0.3s;
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FlagArea = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountrieBoxInfosArea = styled.div`
  padding: .625rem 1rem;
  height: 14.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;
