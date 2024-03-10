import { Image } from "@nextui-org/react";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function FooterComponent() {
  return (
    <footer className={cx("footer")}>
      <Image
        src="/images/logo.png"
        width={100}
        height={100}
        alt="logo-khoe-va-dep"
      />
    </footer>
  );
}
