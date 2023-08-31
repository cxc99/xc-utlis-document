import { useState, useRef } from "react";

import { Table, Divider, Tag } from "antd";

export default function XcTable(props: any) {
  const { data, columns } = props;

  return <Table columns={columns} dataSource={data} />;
}
