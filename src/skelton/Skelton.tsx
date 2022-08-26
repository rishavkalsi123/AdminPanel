import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Skelton.module.scss";
interface Iprops {
  times: number;
}
export const Skelton = (props: Iprops) => {
  return (
    <div>
      <SkeletonTheme>
        {[...Array(props.times)].map((item) => (
          <div className={styles.skeltonPostCard}>
            <Skeleton width="50%" className={styles.cardHeading} />
            <Skeleton height={20} count={2} />
          </div>
        ))}
      </SkeletonTheme>
    </div>
  );
};
