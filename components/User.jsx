import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { logOut } from "../store/modules/login";

const UserWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = () => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logOut());
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
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" onClick={onClickLogout} />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </UserWrapper>
    </>
  );
};

export default User;
