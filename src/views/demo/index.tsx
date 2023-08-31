import { useState, useRef } from "react";

import Child from "@/components/Child.tsx";

function demo() {
  const [list, setList] = useState([
    { type: "icbc", name: "工商银行" },
    { type: "abc", name: "农业银行" },
    { type: "czb", name: "浙商银行" },
    { type: "boczj", name: "中国银行" },
    { type: "ccb", name: "建设银行" },
    { type: "psbc", name: "邮政银行" },
    { type: "kylx", name: "卡赢乐享" },
  ]);

  const [childMsg, setChildMsg] = useState("");

  const getChild = (value: any) => {
    setProps((data) => {
      return {
        ...data,
        title: value,
      };
    });
    return setChildMsg(value);
  };

  const [obj, setObj] = useState({
    userName: "",
    parssWord: "124",
  });

  const [props, setProps] = useState({
    title: "子组件名称",
    getChild,
  });
  const handleCnhange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setProps((data) => {
      return {
        ...data,
        title: value,
      };
    });
  };

  const child = useRef(null) as any;

  const onAdd = () => {
    setList((list) => {
      return (list = [...list, { type: "div", name: "自定义" }]);
    });
  };

  const onChangeUserName = () => {
    setObj((data) => {
      return {
        ...data,
        userName: "cxc",
      };
    });
  };

  const onChildFn = () => {
    child.current!.childFn();
  };

  return (
    <div>
      <button onClick={onAdd}>添加银行</button>
      <div>
        {list.map((item, index) => (
          <div key={item.type + index}> {item.name}</div>
        ))}
      </div>
      <br></br>
      <button onClick={onChangeUserName}>修改用户名称</button>
      <div>用户名称{obj.userName}</div>

      <span>{JSON.stringify(obj)}</span>
      <br></br>
      <div>
        <span>修改子组件的props</span>
        <input type="text" onChange={handleCnhange} value={props.title} />
      </div>
      <Child obj={props} ref={child}></Child>

      <div>我的子组件给出来的数值:{childMsg}</div>

      <button onClick={onChildFn}>我想调用子组件办法 </button>
    </div>
  );
}

export default demo;
