import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

function TableData(props) {
  const gridStyle = { minHeight: 550 };
  const column = [
    { name: "name", header: "Name", minWidth: 50, defaultFlex: 2 },
    { name: "age", header: "Age", maxWidth: 1000, defaultFlex: 1 },
  ];

  return (
    <ReactDataGrid
      idProperty={props.id}
      columns={column}
      dataSource={props.dataSource}
      style={gridStyle}
      pagination
      defaultLimit={10}
      // limit={10}
      // theme="default-dark"
    />
  );
}

export default TableData;
