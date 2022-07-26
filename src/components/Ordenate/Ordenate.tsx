import * as styles from "./OrdenateStyle";
import { ChangeEvent } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useCountries, { CountriesData } from "../../graphql/useCountries";

interface OrdenateProps {
  order: (param: CountriesData[]) => void;
}

const ordenate = (
  dataList: CountriesData[],
  order: string
): CountriesData[] => {
  return order === "az"
    ? dataList.sort((cur, old) => (cur.name > old.name ? 1 : -1))
    : dataList.sort((cur, old) => (cur.name < old.name ? 1 : -1));
};

const Ordenate = ({ order }: OrdenateProps) => {
  const { data, error } = useCountries();
  const { theme } = useTypedSelector((state) => state.theme);

  const handleSelected = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
    if (data?.countries instanceof Array) {
      const newDataList = [...data.countries];
      order(ordenate(newDataList, target.value));
    }
  };

  return (
    <>
      {data && !error && (
        <styles.Select name="ordenate" onChange={handleSelected} theme={theme}>
          <option disabled selected style={{ display: "none" }}>
            Ordenar
          </option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </styles.Select>
      )}
    </>
  );
};

export default Ordenate;
