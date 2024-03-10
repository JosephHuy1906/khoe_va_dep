/* eslint-disable @next/next/no-img-element */
import React from "react";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Image } from "@nextui-org/react";

const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <div className={cx("banner")}>
        <div className={cx("banner-img")}>
          <Image
            width={1000}
            height={300}
            alt="NextUI hero Image"
            src="/images/banner.jpeg"
            className={cx("img")}
            loading="lazy"
          />
          <img
            width={1000}
            height={300}
            alt="NextUI hero Image"
            src="/images/banner-black.png"
            className={cx("banner-gray")}
            loading="eager"
          />
          <div className={cx("title-banner")}>
            <h2>Yến sào Khánh Hoà</h2>
            <h2>Khoẻ & đẹp</h2>
            <p>Thực phẩm dưỡng healty tốt cho sức khoẻ </p>
            <p>Trẻ em cũng như người lớn</p>
          </div>
        </div>
      </div>
      <div className="products"></div>
      <div className="about"></div>
      <div className="content"></div>
    </>
  );
}
