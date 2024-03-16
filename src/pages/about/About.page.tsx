/* eslint-disable @next/next/no-img-element */
import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import { FaStar } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import formatVND from "@/utils/formatMoney";
import { FaTruckMoving } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsBox2Heart } from "react-icons/bs";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <>
      <div className={cx("about")}>
        <div className={cx("about-content")}>
          <div data-aos="fade-right">
            <Image
              src="/images/about.jpg"
              width={500}
              height={500}
              className={cx("about-img")}
              alt="about-img"
            />
          </div>
          <div className={cx("content")}>
            <div data-aos="fade-down">
              <h2>Khoẻ & đẹp</h2>
            </div>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolor recusandae enim iure, accusantium neque esse quam eius
              aspernatur, voluptatum commodi in voluptatem odio repellendus ex
              rem quae temporibus nemo!
            </p>
          </div>
        </div>
      </div>
      <div className={cx("banner")}>
        <div className={cx("banner-img")}>
          <Image
            width={1230}
            height={300}
            alt="NextUI hero Image"
            src="/images/banner.jpeg"
            className={cx("img")}
            loading="lazy"
          />
          <img
            width={1230}
            height={300}
            alt="NextUI hero Image"
            src="/images/banner-black.png"
            className={cx("banner-gray")}
            loading="eager"
          />
          <div className={cx("title-banner")}>
            <h2 className="animate__animated animate__backInDown animate__delay-3s ">
              Yến sào Khánh Hoà
            </h2>
            <h2 className="animate__animated animate__backInUp animate__delay-4s">
              Khoẻ & đẹp
            </h2>
            <p className="animate__animated animate__lightSpeedInRight animate__delay-5s">
              Thực phẩm dưỡng healty tốt cho sức khoẻ{" "}
            </p>
            <p className="animate__animated animate__rollIn  animate__delay-5s">
              Trẻ em cũng như người lớn
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
