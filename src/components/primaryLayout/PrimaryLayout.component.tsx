import React, { ReactNode } from "react";
import styles from "./PrimaryLayout.module.scss";
import classNames from "classnames/bind";
import HeaderComponent from "../Header/Header.component";
import FooterComponent from "../Footer/Footer.component";

const cx = classNames.bind(styles);
export default function PrimaryLayoutComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={cx("container")}>
      <HeaderComponent />
      <main className={cx("contents")}>{children}</main>
      <FooterComponent />
    </div>
  );
}
