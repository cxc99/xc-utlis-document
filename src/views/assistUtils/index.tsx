import { useState } from "react";
import XcTable from "@/components/table";
import { Collapse } from "antd";

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
    api: "typeOf",
    param: "@param  {obj} any",
    explain: "类型检查|返回的结果是string型",
  },
  {
    key: "1",
    api: "deepCopy",
    param: "@param  {obj} any",
    explain: "深拷贝|返回的结果是源类型",
  },
  {
    key: "2",
    api: "delHtmlTag",
    param: "@param  {str} string",
    explain: "去掉所有html标记",
  },
  {
    key: "3",
    api: "copyText",
    param: "@param  {str} string",
    explain: "拷贝指定文本到剪切板",
  },
  {
    key: "4",
    api: "toChinesNum",
    param: "@param  {num} number",
    explain: "数字转成汉字",
  },
];

function assistUtils() {
  const text = `import { assistUtils } from "xc-utlis"`;

  const deepCopyText = `const obj = {
    copy:1
  }`;

  const callback = (key: any) => {
    console.log(key);
  };

  return (
    <div className="text-18px">
      <h1 className="text-[#314659] text-25px font-700 flex  items-center">
        协助包 ----&nbsp; <span className="text-pink-500">assistUtils</span>
      </h1>
      <pre className="language-jsx">
        <code>{text}</code>
      </pre>

      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="类型检查" key="1">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.typeOf()</div>
              <div>传入:['124']</div>
              <div>结果:array</div>
            </code>
          </pre>
        </Panel>
        <Panel header="深拷贝" key="2">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.deepCopy()</div>
              <div>传入:{deepCopyText} </div>
              <div>结果: 深拷贝后的{deepCopyText}</div>
            </code>
          </pre>
        </Panel>
        <Panel header="去掉所有html标记" key="3">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.delHtmlTag()</div>
              <div>传入:文本的类型比如span </div>
              <div>结果:清除所有的span</div>
            </code>
          </pre>
        </Panel>
        <Panel header="剪切板" key="4">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.copyText()</div>
              <div>传入:拷贝的文字 </div>
              <div>结果:拷贝的文字</div>
            </code>
          </pre>
        </Panel>
        <Panel header="数字转成汉字" key="5">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.toChinesNum()</div>
              <div>传入:1 </div>
              <div>结果:一</div>
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

export default assistUtils;
