import { useImperativeHandle, forwardRef } from "react";

function Child(props: any, ref: any) {
  const { obj } = props;
  const handleCnhange = (e: { target: { value: any } }) => {
    const value = e.target.value;

    obj.getChild(value);
  };

  useImperativeHandle(ref, () => {
    const childFn = () => {
      console.log(124);
    };
    return {
      childFn,
    };
  });

  return (
    <div>
      <br></br>
      <span>{JSON.stringify(props)}</span>
      子组件的ref <span>{JSON.stringify(ref)}</span>
      <div>我想在子组件里面修改props</div>
      <input type="text" onChange={handleCnhange} value={obj.title} />
    </div>
  );
}

export default forwardRef(Child);
