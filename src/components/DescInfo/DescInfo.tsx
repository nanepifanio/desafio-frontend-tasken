import * as styles from "./DescInfoStyle";

interface DescInfoProps {
  children: React.ReactNode;
  infodata: string | string[];
}

const DescInfo = ({ children, infodata }: DescInfoProps) => {
  return (
    <styles.DescInfoStructure>
      <span className="desc">{children}</span>
      {infodata instanceof Array && !!infodata.length && (
        <span className="info">{infodata.join(", ")}</span>
      )}
      {infodata instanceof Array && !infodata.length && (
        <span className="info">Unknown</span>
      )}
      {typeof infodata === "string" && infodata.includes(",") && (
        <span className="info">{infodata.replaceAll(",", ", ")}</span>
      )}
      {typeof infodata === "string" && !infodata.includes(",") && (
        <span className="info">{infodata}</span>
      )}
    </styles.DescInfoStructure>
  );
};

export default DescInfo;
