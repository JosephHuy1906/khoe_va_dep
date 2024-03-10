import { Spinner } from "@nextui-org/react";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

export default function LoadingComponent() {
  return (
    <div className={cx("loader-container")}>
      <Spinner className={cx("spinner")} color="success" />
    </div>
  );
}
