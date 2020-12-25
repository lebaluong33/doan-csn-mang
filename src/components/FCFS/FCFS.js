import React, { Component } from "react";
import "./FCFS.css";
import { Layout } from "antd";
import { Typography } from "antd";
import TableInput from "./../TableInput/TableInput";
import { Popconfirm } from "antd";
import GanttChart from "../GanttChart/GanttChart.js";

const { Title } = Typography;

class FCFS extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Arrival Time",
        dataIndex: "arrivalTime",
        width: "15%",
        editable: true,
        sortDirections: [],
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.arrivalTime - b.arrivalTime,
      },
      {
        title: "Process Name",
        dataIndex: "processName",
        width: "30%",
        editable: true,
      },
      {
        title: "Execute Time",
        dataIndex: "executeTime",
        width: "15%",
        editable: true,
      },
      {
        title: "Service Time",
        dataIndex: "serviceTime",
        width: "15%",
        editable: false,
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="./">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      currentZoom: "Seconds",
      messages: [],
      dataSource: [
        {
          id: "1",
          key: "0",
          processName: "process 0",
          arrivalTime: "2",
          executeTime: "5",
          serviceTime: 0,
        },
        {
          id: "2",
          key: "1",
          processName: "process 1",
          arrivalTime: "1",
          executeTime: "5",
          serviceTime: 6,
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key).sort((a, b) => (a.arrivalTime - b.arrivalTime)),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      processName: `process ${count}`,
      arrivalTime: `${count}`,
      executeTime: "5",
      serviceTime: "6",
    };
    const updateData = [...dataSource, newData].sort((a, b) => (a.arrivalTime - b.arrivalTime));
    this.setState({
      dataSource: updateData,
      count: count + 1,
    });
    console.log(updateData);
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  onFindWaitingTime = () => {
    const dataSource = [...this.state.dataSource];
    dataSource[0].serviceTime = 0;

  }
  render() {
    const { dataSource } = this.state;
    const sortedData = dataSource.sort((a,b) => a.arrivalTime - b.arrivalTime);
    // const ganttData = dataSource.map((item, index) => {
    //   return {
    //     ...item.processName: "ss" 
    //   }
    // });
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <Layout className="site-layout-background">
        <Title>First Come First Service</Title>
        <TableInput
          handleAdd={this.handleAdd}
          dataSource={dataSource}
          columns={columns}
        />
        <GanttChart />
      </Layout>
    );
  }
}

export default FCFS;
