import { useState } from "react";
import XcTable from "@/components/table";
import { Collapse } from "antd";
import { arrayUtils } from "xc-utlis";

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
    api: "safeArray",
    param: "@param array",
    explain: "检测是否为一个安全数组,若不是返回空数组",
  },
  {
    key: "1",
    api: "isEmptyArray",
    param: "@param array",
    explain: "检验一个数组是非为空|true条件(一定为数组，且是空数组)",
  },
  {
    key: "2",
    api: "isValidArray",
    param: "@param array",
    explain: "检验一个数组是否为有效数组",
  },
  {
    key: "3",
    api: "getKeysList",
    param: "@param  {T[]} list  @param  {K|K[]} key",
    explain:
      "将根据key值获取对象数组中的对应的键值组成数组，若key是数组，则根据key中的值重新组装对象数组",
  },
  {
    key: "4",
    api: "filterDuplicate",
    param: "@param {Array<T>}  @param {K} key",
    explain:
      "数组去重,如果传key则是对象数组去重-根据对象对应key的value值去除重复,不支持直接对比引用类型",
  },
];

function ArrayUtils() {
  const text = `import { arrayUtils } from "xc-utlis"`;
  const list = `[{name:'柳大华',value:'ldh'},{name:'小日本',value:'xrb'},{name:'柳大华',value:'ldh'}]`;
  const cList = [
    { name: "柳大华", value: "ldh" },
    { name: "小日本", value: "xrb" },
    { name: "柳大华", value: "ldh" },
  ];
  const getKeysList = (list: any, key: any) => {
    return arrayUtils.getKeysList(list, key);
  };

  const filterDuplicate = (list: any, key: any) => {
    return arrayUtils.filterDuplicate(list, key);
  };

  return (
    <div className="text-18px">
      <h1 className="text-[#314659] text-25px font-700 flex  items-center">
        数组包 ----&nbsp; <span className="text-pink-500">arrayUtils</span>
      </h1>
      <pre className="language-jsx">
        <code>{text}</code>
      </pre>

      <Collapse defaultActiveKey={["1"]}>
        <Panel header="检查是否为安全数组" key="1">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.safeArray()</div>
              <div>传入:''</div>
              <div>结果:false</div>
              <div>传入:[]</div>
              <div>结果:true</div>
            </code>
          </pre>
        </Panel>

        <Panel header="检验一个数组是非为空" key="2">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.isEmptyArray()</div>
              <div>传入:[]</div>
              <div>结果:true</div>
              <div>传入:[1]</div>
              <div>结果:false</div>
            </code>
          </pre>
        </Panel>

        <Panel header="检验一个数组是否为有效数组" key="3">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.isValidArray()</div>
              <div>传入:[]</div>
              <div>结果:false</div>
              <div>传入:[1]</div>
              <div>结果:true</div>
            </code>
          </pre>
        </Panel>

        <Panel header="重组数组" key="4">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.getKeysList()</div>
              <div>传入:{list}和['name']</div>
              <div>结果:{JSON.stringify(getKeysList(cList, ["name"]))}</div>
            </code>
          </pre>
        </Panel>

        <Panel header="重组数组去重" key="5">
          <pre className="language-jsx ">
            <code>
              <div>assistUtils.filterDuplicate()</div>
              <div>传入:{list}和['name']</div>
              <div>
                结果:
                {JSON.stringify(filterDuplicate(cList, ["name"]))}
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

export default ArrayUtils;
