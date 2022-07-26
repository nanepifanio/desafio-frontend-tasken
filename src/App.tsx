import "./App.css";
import * as styles from "./AppStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useLayoutEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useCountries, { CountriesData } from "./graphql/useCountries";
import CountriesBox from "./components/CountriesBox/CountriesBox";
import Loading from "./components/Loading";
import Ordenate from "./components/Ordenate";
import ShowError from "./components/ShowError";

const App = () => {
  const [ordenedData, setOrdenedData] = useState<CountriesData[]>([]);
  const { data, loading, error } = useCountries();
  const buttonUp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 250) {
        buttonUp.current?.classList.add("active");
      } else {
        buttonUp.current?.classList.remove("active");
      }
    };

    const smoothScroll = (): void => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    buttonUp.current?.addEventListener("click", smoothScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      buttonUp.current?.removeEventListener("click", smoothScroll);
    };
  }, []);

  const handleOrder = (dataOrdened: CountriesData[]): void => {
    setOrdenedData(dataOrdened);
  };

  return (
    <div className="appcontainer">
      <Provider store={store}>
        <Header />
        <Ordenate order={handleOrder} />
        <styles.CountriesContainer>
          {loading && <Loading />}
          {error && <ShowError error={error} />}
          {data && !ordenedData.length && (
            <styles.CountriesGrid>
              {data.countries.map((country) => (
                <CountriesBox key={country.name} countriedata={country} />
              ))}
            </styles.CountriesGrid>
          )}
          {!!ordenedData.length && (
            <styles.CountriesGrid>
              {ordenedData.map((country) => (
                <CountriesBox key={country.name} countriedata={country} />
              ))}
            </styles.CountriesGrid>
          )}
        </styles.CountriesContainer>
        <div className="buttonUp" ref={buttonUp}>
          &uarr;
        </div>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
