import * as Style from "./HeaderStyle";
import light from "../../assets/light-mode.svg";
import dark from "../../assets/dark-mode.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/reducers/themeReducer";
import { useEffect, useLayoutEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const changeBodyTheme = (theme: string): void => {
  if (theme === "light") {
    document.body.classList.remove("darkmode");
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
    document.body.classList.add("darkmode");
  }
};

const Header = () => {
  const { theme } = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { setLocal, getLocal } = useLocalStorage("theme", "");

  useEffect(() => {
    const storedTheme = getLocal("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
      changeBodyTheme(storedTheme);
    }
  }, []);

  useLayoutEffect(() => {
    setLocal(theme);
    changeBodyTheme(theme);
  }, [theme]);

  const changeTheme = (): void => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <Style.HeaderStructure>
      <h1>Countries</h1>
      <Style.DarkModeArea onClick={changeTheme}>
        <Style.DarkModeIcon src={theme === "light" ? dark : light} />
        <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
      </Style.DarkModeArea>
    </Style.HeaderStructure>
  );
};

export default Header;
