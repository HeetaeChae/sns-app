import Head from "next/head";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const PostFormWrapper = styled.div`
  margin-top: 30px;
  padding: 0 30px;
`;
const PostCardWrapper = styled.div`
  margin-top: 30px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const mainPosts = useSelector((state) => state.post.mainPosts);
  return (
    <Layout>
      <PostFormWrapper>{isLoggedIn && <PostForm />}</PostFormWrapper>
      <PostCardWrapper>
        {mainPosts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </PostCardWrapper>
    </Layout>
  );
}
