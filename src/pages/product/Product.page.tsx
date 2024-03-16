"use client";
import React from "react";
import classNames from "classnames/bind";
import style from "./Product.module.scss";
import { FaTruckMoving } from "react-icons/fa6";
import { BsBox2Heart } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const cx = classNames.bind(style);
const list = [
  {
    id: "1",
    image: "product-dang-cap-sang-an.jpg",
    title: "Đẳng cấp sàng ăn",
    price: "5000000",
  },
  {
    id: "2",
    image: "product-trai-nghiem-thu-vi.jpg",
    title: "Trải nghiệm thú vị",
    price: "2000000",
  },
  {
    id: "3",
    image: "product-vi-ngon-cao-cap.jpg",
    title: "Vị ngon cao cấp",
    price: "4200000",
  },
  {
    id: "4",
    image: "product-khoe-dep-duong-nhan.jpg",
    title: "Khoẻ & đẹp dưỡng nhan",
    price: "39000",
  },
];
export default function ProductPage() {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push("/product/" + id);
  };
  return (
    <div className={cx("product-all")}>
      <div className={cx("title")}>
        <h2>Tất cả sản phẩm</h2>
        <p>Top all Product</p>
      </div>

      <div className={cx("product-item")}>
        {list.map((item, index) => (
          <Card
            className={cx("pro-item")}
            shadow="sm"
            onClick={() => handleClick(item.id)}
            key={index}
            isPressable
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className={cx("img-product")}
                src={"/images/" + item.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-green-00">{item.title}</b>
              <p className="text-green-00">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
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
          <li data-aos="fade-up">
            <BiSupport className={cx("cont-icon")} />
            <p>Hỗ trợ đổi trả khi sản phẩm gặp vấn đề Miễn phí.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
