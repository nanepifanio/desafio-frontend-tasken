import * as Styles from "./FooterStyle";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Footer = () => {
  const { theme } = useTypedSelector((state) => state.theme);

  return (
    <Styles.FooterStructure theme={theme}>
      <p>
        Desafio Front-end <span>Tasken</span>. Desenvolvido por{" "}
        <span>Renan Epifânio</span>.
      </p>
    </Styles.FooterStructure>
  );
};

export default Footer;
