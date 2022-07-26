import { useTypedSelector } from "../../hooks/useTypedSelector";
import { LoadingStructure } from "./LoadingStyle";

const Loading = () => {
  const { theme } = useTypedSelector((state) => state.theme);

  return (
    <LoadingStructure theme={theme}>
      <div></div>
    </LoadingStructure>
  );
};

export default Loading;
