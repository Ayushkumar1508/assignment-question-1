import styles from "./ListRow.module.css";

const ListCell = ({ children, handleClick }) => {
  return <tr onClick={handleClick} className={styles.cell}>{children}</tr>;
};

export default ListCell;
