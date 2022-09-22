import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Row, Col, Menu, Input } from "antd";
import { HomeOutlined, UserOutlined, FileAddOutlined } from "@ant-design/icons";

import User from "./User";
import Banner from "./Banner";
import Login from "./Login";

const NavbarWrapper = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <>
      <NavbarWrapper mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          홈
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          프로필
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search
            style={{
              width: 200,
              verticalAlign: "middle",
            }}
          />
        </Menu.Item>
        <Menu.Item key="signup" icon={<FileAddOutlined />}>
          회원가입
        </Menu.Item>
      </NavbarWrapper>
      <Row>
        <Col sm={24} md={6}>
          {isLoggedIn ? <User /> : <Login />}
        </Col>
        <Col sm={24} md={12}>
          {children}
        </Col>
        <Col sm={24} md={6}>
          <Banner />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
