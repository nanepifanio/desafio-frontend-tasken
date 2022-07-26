import * as styles from "./CountriesBoxStyle";
import { CountriesData } from "../../graphql/useCountries";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DescInfo from "../DescInfo";

interface CountriesBoxProps {
  countriedata: CountriesData;
}

const CountriesBox = ({ countriedata }: CountriesBoxProps) => {
  const { theme } = useTypedSelector((state) => state.theme);

  return (
    <styles.CountriesBoxStructure theme={theme}>
      <styles.FlagArea>
        <span>{countriedata.emoji}</span>
      </styles.FlagArea>
      <styles.CountrieBoxInfosArea>
        <h2>{countriedata.name}</h2>
        <DescInfo infodata={countriedata.capital ?? "Unknown"}>
          Capital:
        </DescInfo>
        <DescInfo
          infodata={countriedata.languages.map(({ name }) => name) ?? "Unknown"}
        >
          {"Idioma(s):"}
        </DescInfo>
        <DescInfo infodata={countriedata.currency ?? "Unknown"}>
          {"Moeda(s):"}
        </DescInfo>
      </styles.CountrieBoxInfosArea>
    </styles.CountriesBoxStructure>
  );
};

export default CountriesBox;
