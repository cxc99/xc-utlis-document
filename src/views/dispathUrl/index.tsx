import XcTable from "@/components/table";
import { Collapse } from "antd";
import { dispathUrl } from "xc-utlis";
const { Panel } = Collapse;
const columns = [
  {
    title: "属性",
    dataIndex: "api",
  },
  {
    title: "参数",
    dataIndex: "param",
  },
  {
    title: "说明",
    dataIndex: "explain",
  },
];
const data = [
  {
    key: "0",
    api: "getUrlData",
    param: "无",
    explain: "已对象形式返回路由上的数据",
  },
];

const text = `import { dispathUrl } from "xc-utlis"`;

const getUrlData = () => {
  return dispathUrl.getUrlData();
};

export default function DispathUrl() {
  return (
    <div className="text-18px">
      <h1 className="text-[#314659] text-25px font-700 flex  items-center">
        域名包 ----&nbsp; <span className="text-pink-500">dispathUrl</span>
      </h1>
      <pre className="language-jsx">
        <code>{text}</code>
      </pre>

      <Collapse defaultActiveKey={["1"]}>
        <Panel header="获取url传参" key="1">
          <pre className="language-jsx ">
            <code>
              <div>dispathUrl.getUrlData()</div>
              <div>传入:自动获取浏览器上的传参</div>
              <div>结果:{JSON.stringify(getUrlData())}</div>
            </code>
          </pre>
        </Panel>
      </Collapse>

      <h2 id="✨-特性" data-scrollama-index="0" className="py-10px">
        <span>✨ API</span>
      </h2>
      <XcTable columns={columns} data={data}></XcTable>
    </div>
  );
}
