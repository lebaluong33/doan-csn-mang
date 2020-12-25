import React from "react";
import { Table, Button } from "antd";
import EditableRow from "./EditableRow/EditableRow";
import EditableCell from "./EditableRow/EditableCell/EditableCell";

const TableInput = (props) => {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  return (
    <div>
      <Button
        onClick={props.handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={props.dataSource}
        columns={props.columns}
      />
    </div>
  );
};

export default TableInput;
