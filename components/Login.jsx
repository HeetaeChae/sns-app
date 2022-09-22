import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { logIn } from "../store/modules/login";

const FormWrapper = styled.div`
  margin-top: 30px;
  padding-right: 10px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = useCallback(() => {
    dispatch(logIn());
  }, []);
  return (
    <>
      <FormWrapper>
        <Form
          onFinish={onFinish}
          labelCol={{
            span: 6,
          }}
        >
          <Form.Item
            label="아이디"
            name="id"
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: "5px 20px" }}
            >
              로그인
            </Button>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>
  );
};

export default Login;
