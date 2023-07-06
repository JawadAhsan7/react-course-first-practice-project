import TableBody from "./TableComponents/TableBody";
import TableHead from "./TableComponents/TableHead";

function Table() {
  return (
    <table className="result">
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;
