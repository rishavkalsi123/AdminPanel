import React, { useEffect, useState, useRef } from "react";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostsSlice";
import styles from "./styles/PostsList.module.scss";
import { motion } from "framer-motion";
import { PostsAnimation, postPageAnimation } from "./Animations/Animations";
import { Skelton } from "../skelton/Skelton";

const PostsList = () => {
  const postList = useSelector((state) => state.posts.data.posts);
  const status = useSelector((state: any) => state.posts.status);
  const dispatch = useDispatch<any>();
  console.log("opsts====>", postList);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <DashboardLayout>
      <motion.div
        className={styles.postPage}
        variants={postPageAnimation}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mb-3">All Posts</h1>
        {status === "loading" ? (
          <h4>
            <Skelton times={6} />
          </h4>
        ) : status === "error" ? (
          <h4>Error</h4>
        ) : (
          <div>
            {postList
              ? postList.map((item: any, index: number) => (
                  <div
                    className={styles.postCard}
                    key={item.id}
                    // variants={PostsAnimation}
                  >
                    <h5>
                      {index + 1} {item.title}
                    </h5>
                    <p>{item.body}</p>
                  </div>
                ))
              : "no data fon"}
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};

export default PostsList;
