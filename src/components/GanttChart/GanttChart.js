import React, { Component } from "react";
import { Table } from "antd";
const columns = [
  {
    title: "process1",
    dataIndex: "process1",
  },
  {
    title: "process2",
    dataIndex: "process2",
  },
  {
    title: "process3",
    dataIndex: "process3",
  },
];

const data = [
  {
    key: "1",
    process1: 0,
    process2: 4,
    process3: 8,
  },
];
export default class GanttChart extends Component {
  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="small"
        />
      </div>
    );
  }
}
