export const postPageAnimation = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
    },
  },
};
export const PostsAnimation = {
  hidden: {
    opacity: 0,
    y: "30px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      mass: 1,
    },
  },
};
export const RouteAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "linear" },
  },
};
