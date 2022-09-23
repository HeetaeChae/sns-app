import { Input, Button, Form } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPost } from "../store/modules/post";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonStyle = styled(Button)`
  margin-top: 3px;
  width: 7rem;
  height: 2rem;
`;

const PostForm = () => {
  const dispatch = useDispatch();
  const onFinish = () => {
    dispatch(addPost());
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Input.TextArea rows={8} />
        <ButtonWrapper>
          <ButtonStyle>이미지 업로드</ButtonStyle>
          <ButtonStyle type="primary" htmlType="submit">
            등록
          </ButtonStyle>
        </ButtonWrapper>
      </Form>
    </>
  );
};

export default PostForm;
