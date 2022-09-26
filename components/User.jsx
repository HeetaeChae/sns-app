import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logOutRequest } from "../store/modules/login";

const UserWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const onClickLogout = () => {
    dispatch(logOutRequest());
  };
  return (
    <>
      <UserWrapper>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            login.isLoggingOut ? (
              <Button onClick={onClickLogout} loading>
                <LogoutOutlined />
                로그아웃
              </Button>
            ) : (
              <Button onClick={onClickLogout}>
                <LogoutOutlined />
                로그아웃
              </Button>
            ),
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{login.user.nickname[0]}</Avatar>}
            title={login.user.nickname}
            description={login.user.email}
          />
        </Card>
      </UserWrapper>
    </>
  );
};

export default User;
