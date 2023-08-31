import { useState } from "react";
import "./App.css";
import routes from "./router/index";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const history = useNavigate();

  const path = (path: string) => {
    //在这个代码里,跳转friend页面并携带了id:1的参数
    history(path);
  };

  return (
    <div className="app">
      {/* 注册路由 */}
      <Routes>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<item.element></item.element>}
            >
              {item.children &&
                item.children!.map((tar, tarIndex) => {
                  return (
                    <Route
                      key={tarIndex}
                      path={tar.path}
                      element={<tar.element></tar.element>}
                    ></Route>
                  );
                })}
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
