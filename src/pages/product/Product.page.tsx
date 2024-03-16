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
} from "@nextui-org/react";

const cx = classNames.bind(style);
const list = [
  {
    id: 1,
    title: "Đẳng cấp sành ăn",
    img: "/images/product-dang-cap-sang-an.jpg",
    price: "5.50",
  },
  {
    id: 2,
    title: "Khoẻ đẹp dưởng da",
    img: "/images/product-khoe-dep-duong-nhan.jpg",
    price: "3.00",
  },
  {
    id: 3,
    title: "Trải nghiệp thú vị",
    img: "/images/product-trai-nghiem-thu-vi.jpg",
    price: "10.00",
  },
  {
    id: 4,
    title: "Vị ngon cao cấp",
    img: "/images/product-vi-ngon-cao-cap.jpg",
    price: "5.30",
  },
];

export default function ProductPage() {
  return (
    <div className={cx("product-all")}>
      <div className={cx("title")}>
        <h2>Tất cả sản phẩm</h2>
        <p>Top all Product</p>
      </div>

      <div className={cx("product-item")}>
        {list.map((item, index) => (
          <Card className={cx("pro-item")} shadow="sm" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className={cx("img-product")}
                src={item.img}
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
