import { Navigate, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HeartOutlined,
  GlobalOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import Layout from "../views/Layout/index.tsx";
import Home from "../views/Home/index.tsx";
import assistUtils from "../views/assistUtils/index.tsx";
import arrayUtils from "../views/arrayUtils/index.tsx";

import dispathUrl from "../views/dispathUrl/index.tsx";

import toolKit from "../views/toolKit/index.tsx";
const routes = [
  {
    path: "/",
    element: Layout,
    children: [
      {
        path: "",
        name: "首页",
        element: Home,
        meta: {
          title: "首页",
        },
      },
      {
        path: "assistUtils",
        name: "assistUtils",
        element: assistUtils,
        meta: {
          title: "assistUtils",
        },
      },
      {
        path: "arrayUtils",
        name: "arrayUtils",
        element: arrayUtils,
        meta: {
          title: "arrayUtils",
        },
      },
      {
        path: "dispathUrl",
        name: "dispathUrl",
        element: dispathUrl,
        meta: {
          title: "arrayUtils",
        },
      },
      {
        path: "toolKit",
        name: "toolKit",
        element: toolKit,
        meta: {
          title: "toolKit",
        },
      },
    ],
    mate: {
      icon: HeartOutlined,
    },
  },
  { path: "/demo", element: Home },
];

export default routes;
