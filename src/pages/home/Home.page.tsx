/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FaStar } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import { FaTruckMoving } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsBox2Heart } from "react-icons/bs";
import { getProductAll } from "@/services/Product.service";
import { setLocalstorage } from "@/utils/LocalStorage";
import { useRouter } from "next/navigation";
import { IProductArr } from "@/interfaces";

const cx = classNames.bind(styles);

export default function HomePage() {
  const router = useRouter();
  const [data, setData] = useState<IProductArr[]>([]);
  useEffect(() => {
    getProductAll().then((res) => {
      setData(res.data);
    });
  }, []);
  const hanldProductId = (id: string) => {
    console.log("id", id);

    setLocalstorage("idPr", id);
    router.replace("/productDetail");
  };
  return (
    <>
      <div className={cx("banner")}>
        <div className={cx("banner-img")}>
          <Image
            width={1230}
            height={300}
            alt="NextUI hero Image"
            src="/images/banner.jpeg"
            className={cx("img")}
            loading="lazy"
            title="banner-yensao-khoevadep54"
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
            <h1 className="animate__animated animate__backInDown animate__delay-3s ">
              Yến sào Khánh Hoà Khoẻ & đẹp
            </h1>

            <p className="animate__animated animate__lightSpeedInRight animate__delay-5s">
              Thực phẩm dưỡng healty tốt cho sức khoẻ{" "}
            </p>
            <p className="animate__animated animate__rollIn  animate__delay-5s">
              Trẻ em cũng như người lớn
            </p>
          </div>
        </div>
      </div>
      <div className={cx("products")}>
        <div className={cx("title")}>
          <h2>Các sản phẩm nổi bật</h2>
          <p>Những sản phẩm hot có lượt mua cao nhất</p>
        </div>
        <div className={cx("product-item")}>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={cx("item")}
              onClick={() => hanldProductId(item.id)}
            >
              <div data-aos="fade-up" data-aos-duration={index + "000"}>
                <Image
                  width={1000}
                  height={300}
                  src={item.img1}
                  className={cx("item-img")}
                  alt="img-product"
                  title={"san-pham-" + item.name}
                />
              </div>
              <h2
                data-aos="fade-down"
                data-aos-duration={index + "000"}
                onClick={() => hanldProductId(item.id)}
              >
                {item.name}
              </h2>
              <div
                className={cx("star")}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration={index + "000"}
              >
                <FaStar className={cx("icon-star")} />
                <FaStar className={cx("icon-star")} />
                <FaStar className={cx("icon-star")} />
                <FaStar className={cx("icon-star")} />
                <FaStar className={cx("icon-star")} />
              </div>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                Giá: {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("about")}>
        <div className={cx("about-content")}>
          <div data-aos="fade-right">
            <Image
              src="/images/about.jpg"
              width={500}
              height={500}
              className={cx("about-img")}
              alt="about-img"
              title="noi-san-xuat-yen-tai-khoe-va-dep54"
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
      <div className={cx("content-bot")}>
        <ul className={cx("cont-ul")}>
          <li data-aos="fade-right" data-aos-easing="ease-in-sine">
            <FaTruckMoving className={cx("cont-icon")} />
            <p>Giao Hàng nội thành Tp Hồ Chí Minh trong ngày.</p>
          </li>
          <li data-aos="fade-down" data-aos-easing="linear">
            <BsBox2Heart className={cx("cont-icon")} />
            <p>Uy tín và chất lượng sản phẩm được đặt lên hàng đầu.</p>
          </li>
          <li data-aos="fade-left">
            <BiSupport className={cx("cont-icon")} />
            <p>Hỗ trợ đổi trả khi sản phẩm gặp vấn đề Miễn phí.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
