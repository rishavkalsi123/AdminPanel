import React, { useEffect, useState, useRef } from "react";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostsSlice";
import styles from "./styles/PostsList.module.scss";
import { motion } from "framer-motion";
import { PostsAnimation, postPageAnimation } from "./Animations/Animations";

const PostsList = () => {
  const postList = useSelector((state) => state.posts.data.posts);
  const status = useSelector((state: any) => state.posts.status);
  const dispatch = useDispatch();
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
        {status === "loading" ? (
          <h2>Loading .....</h2>
        ) : status === "error" ? (
          <h2>Error</h2>
        ) : (
          <div>
            {postList
              ? postList.map((item: any, index: number) => (
                  <motion.div
                    className={styles.postCard}
                    key={item.id}
                    variants={PostsAnimation}
                  >
                    <h5>
                      {index + 1} {item.title}
                    </h5>
                    <p>{item.body}</p>
                  </motion.div>
                ))
              : "no data fon"}
          </div>
        )}
      </motion.div>
    </DashboardLayout>
  );
};

export default PostsList;
