import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

export interface CountriesData {
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: [{ name: string }];
}

interface Countries {
  countries: CountriesData[];
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const COUNTRIES_LIST = gql`
  {
    countries {
      name
      capital
      emoji
      currency
      languages {
        name
      }
    }
  }
`;

const useCountries = () => {
  const { data, loading, error } = useQuery<Countries>(COUNTRIES_LIST, {
    client,
  });

  return { data, loading, error };
};

export default useCountries;
