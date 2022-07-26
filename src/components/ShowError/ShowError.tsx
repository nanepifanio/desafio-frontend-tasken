import { ApolloError } from "@apollo/client";

interface ShowErrorProps {
  error: ApolloError;
}

const ShowError = ({ error }: ShowErrorProps) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      {error.message}
    </div>
  );
};

export default ShowError;
