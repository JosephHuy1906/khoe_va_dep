"use client";
import React, { ReactNode, useEffect } from "react";
import styles from "./PrimaryLayout.module.scss";
import classNames from "classnames/bind";
import HeaderComponent from "../Header/Header.component";
import FooterComponent from "../Footer/Footer.component";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import GoTopComponent from "../Button/GoTop.component";
import BtnZaloComponent from "../Button/BtnZalo.component";

const cx = classNames.bind(styles);

export default function PrimaryLayoutComponent({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className={cx("container")}>
      <HeaderComponent />
      <main className={cx("contents")}>{children}</main>
      <FooterComponent />
      <BtnZaloComponent />
      <GoTopComponent />
    </div>
  );
}
