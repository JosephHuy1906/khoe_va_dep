"use client";
import React, { useEffect, useState } from "react";
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
import { getProductAll } from "@/services/Product.service";
import { IProductArr } from "@/interfaces";
import { setLocalstorage } from "@/utils/LocalStorage";

const cx = classNames.bind(style);

export default function ProductPage() {
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
    <div className={cx("product-all")}>
      <div className={cx("title")}>
        <h2>Tất cả sản phẩm</h2>
        <p>Top all Product</p>
      </div>

      <div className={cx("product-item")}>
        {data.map((item, index) => (
          <Card
            className={cx("pro-item")}
            shadow="sm"
            onClick={() => hanldProductId(item.id)}
            key={index}
            isPressable
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className={cx("img-product")}
                src={item.img1}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-green-00">{item.name}</b>
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
