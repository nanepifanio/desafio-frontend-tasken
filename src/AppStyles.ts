import styled from "styled-components";

export const CountriesContainer = styled.div`
  padding: 2.5rem calc((100% - 90rem) / 2);
  flex: 1;

  @media (max-width: 31.25rem) {
    padding-top: 1.875rem;
  }
`
export const CountriesGrid = styled.main`
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 18.75rem));
  justify-content: space-between;
  gap: 30px;
  padding: 2.5rem 1.25rem;

  @media (max-width: 48rem) {
    grid-template-columns: 18.125rem;
    justify-content: center;
    row-gap: 2.5rem;
  }

  @media (max-width: 31.25rem) {
    grid-template-rows: repeat(auto-fit, auto);
  }
`