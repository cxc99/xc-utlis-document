import XcTable from "@/components/table";
import { Collapse, Button } from "antd";
import { toolKit } from "xc-utlis";
import { useState } from "react";

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
    api: "debounce",
    param: "@param  {fn} function  @param  {wait} number",
    explain: "节流",
  },
  {
    key: "1",
    api: "throttle",
    param: "@param  {fn} function  @param  {wait} number",
    explain: "防抖",
  },
];

export default function ToolKit() {
  const text = `import { toolKit } from "xc-utlis"`;
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum(sum + 1);
  };

  const addDebounce = () => {
    const debounce = toolKit.debounce(add, 2000);
    debounce();
  };

  const addThrottle = () => {
    const throttle = toolKit.throttle(add, 2000);
    throttle();
  };
  return (
    <div className="text-18px">
      <h1 className="text-[#314659] text-25px font-700 flex  items-center">
        操作包 ----&nbsp; <span className="text-pink-500">toolKit</span>
      </h1>
      <pre className="language-jsx">
        <code>{text}</code>
      </pre>

      <Collapse defaultActiveKey={["1"]}>
        <Panel header="防抖" key="1">
          <pre className="language-jsx "> 
            <code>
              <div>toolKit.debounce(fn,wait)</div>
              <div>
                初始值:{sum}{" "}
                <Button type="primary" onClick={add}>
                  加一
                </Button>
                <span className="mx-10px">防抖2秒后:</span>
                <Button type="primary" onClick={addDebounce}>
                  加一
                </Button>
              </div>
            </code>
          </pre>
        </Panel>

        <Panel header="节流" key="2">
          <pre className="language-jsx ">
            <code>
              <div>toolKit.throttle(fn,wait)</div>
              <div>
                初始值:{sum}{" "}
                <Button type="primary" onClick={add}>
                  加一
                </Button>
                <span className="mx-10px">节流2秒后:</span>
                <Button type="primary" onClick={addThrottle}>
                  加一
                </Button>
              </div>
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
