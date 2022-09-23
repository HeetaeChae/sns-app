import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Avatar, Button, Card, Popover, Input, Form, List } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  CommentOutlined,
  MoreOutlined,
  HeartFilled,
} from "@ant-design/icons";

import PostImages from "./PostImages";
import ButtonGroup from "antd/lib/button/button-group";

const FormWrapper = styled(Form)`
  border: 0.5px solid rgb(240, 240, 240);
  padding: 2rem 2rem 0 2rem;
  border-radius: 5px;
`;

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.login.me && state.login.me.id);
  const [likeToggle, setLikeToggle] = useState(false);
  const onClickLikeToggle = useCallback(() => {
    setLikeToggle(!likeToggle);
  }, []);
  const [commentToggle, setCommentToggle] = useState(false);
  const onClickCommentToggle = useCallback(() => {
    setCommentToggle(!commentToggle);
  }, []);
  return (
    <>
      <Card
        cover={<PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          likeToggle ? (
            <HeartFilled key="heart" onClick={onClickLikeToggle} />
          ) : (
            <HeartOutlined key="heart" onClick={onClickLikeToggle} />
          ),
          <CommentOutlined key="comment" onClick={onClickCommentToggle} />,
          <Popover
            content={
              <ButtonGroup>
                {id && id === post.User.id ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </ButtonGroup>
            }
          >
            <MoreOutlined key="more" />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        ></Card.Meta>
      </Card>
      {commentToggle ? (
        <FormWrapper>
          <Form.Item>
            <Input.TextArea rows={4} />
            <Button>댓글 등록</Button>
          </Form.Item>
          <Form.Item>
            <List
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    title={item.User.nickname}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </Form.Item>
        </FormWrapper>
      ) : null}
    </>
  );
};

export default PostCard;
