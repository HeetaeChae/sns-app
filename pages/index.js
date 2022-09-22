import Head from "next/head";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const mainPosts = useSelector((state) => state.post.mainPosts);
  return (
    <Layout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Layout>
  );
}
