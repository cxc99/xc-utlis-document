import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HeartOutlined,
  GlobalOutlined,
  LikeOutlined,
  DatabaseOutlined,
  ChromeOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Icon } from "antd";
import type { MenuProps, MenuTheme } from "antd";
import router from "@/router";

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [activeMenu, setMenu] = useState("assistUtils");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    navigate(e.key);
  };

  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="w-full h-50px flex justify-center items-center font-700 text-[#fff]">
          CX-UTLIS
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          items={[
            {
              key: "",
              icon: <MenuUnfoldOutlined />,
              label: "首页",
            },
            {
              key: "assistUtils",
              icon: <HeartOutlined />,
              label: "协助包",
            },
            {
              key: "arrayUtils",
              icon: <DatabaseOutlined />,
              label: "数组包",
            },
            {
              key: "dispathUrl",
              icon: <ChromeOutlined />,
              label: "域名包",
            },
            {
              key: "toolKit",
              icon: <RocketOutlined />,
              label: "操作包",
            },
          ]}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflow: "auto",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
