"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./ProductDetail.module.scss";
import { FaStar, FaTruckMoving } from "react-icons/fa6";
import { BsBox2Heart } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Button, Image } from "@nextui-org/react";
import { getLocalstorage } from "@/utils/LocalStorage";
import { getProductById } from "@/services/Product.service";
import Link from "next/link";

const cx = classNames.bind(style);

interface IProductArr {
  id: string;
  name: string;
  price: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  describe: string;
  detail: {
    id?: string;
    infomation: string;
    use: string;
    manual: string;
    preserve: string;
    productId?: number;
  };
}

export default function ProductDetailPage() {
  const [selectedImg, setSelectedImg] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProductArr | null>(null);

  useEffect(() => {
    setLoading(true);

    getProductById()
      .then((res) => {
        setDataDetail(res.data);
        setSelectedImg(res.data.img1);
      })
      .finally(() => {
        setLoading(false);
        console.log("img", selectedImg);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImgClick = (url: string) => {
    setSelectedImg(url);
  };
  const lines = dataDetail?.detail.infomation.split("-");
  const manual = dataDetail?.detail.manual.split("-");
  const use = dataDetail?.detail.use.split("-");
  const preserve = dataDetail?.detail.preserve.split("-");
  return (
    <div className={cx("product-all")}>
      <h2>Trang chủ / Chi tiết sản phẩm</h2>
      <div className={cx("slide-show")}>
        <div className={cx("slide-img")}>
          <Image
            src={selectedImg}
            width={500}
            height={500}
            alt="img-main"
            className={cx("img-main")}
          />
          <div className={cx("list-img")}>
            <Image
              src={dataDetail?.img1}
              width={100}
              height={100}
              alt="img-main"
              onClick={() => handleImgClick(dataDetail?.img1 || "")}
              className={cx("thumbnail", {
                "thumbnail-active": dataDetail?.img1 === selectedImg,
              })}
            />
            <Image
              src={dataDetail?.img2}
              width={100}
              height={100}
              alt="img-main"
              onClick={() => handleImgClick(dataDetail?.img2 || "")}
              className={cx("thumbnail", {
                "thumbnail-active": dataDetail?.img2 === selectedImg,
              })}
            />
            <Image
              src={dataDetail?.img3}
              width={100}
              height={100}
              alt="img-main"
              onClick={() => handleImgClick(dataDetail?.img3 || "")}
              className={cx("thumbnail", {
                "thumbnail-active": dataDetail?.img3 === selectedImg,
              })}
            />
            <Image
              src={dataDetail?.img4}
              width={100}
              height={100}
              alt="img-main"
              onClick={() => handleImgClick(dataDetail?.img4 || "")}
              className={cx("thumbnail", {
                "thumbnail-active": dataDetail?.img4 === selectedImg,
              })}
            />
          </div>
        </div>
        <div className={cx("slide-title")}>
          <h2>{dataDetail?.name}</h2>
          <p>Yến sào khánh hoà khoẻ & đẹp</p>
          <div className={cx("star-icon")}>
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
          </div>
          <div className={cx("price")}>
            <p>Giá</p>
            <p style={{ color: "red" }}>{dataDetail?.price}</p>
          </div>
          <p>{dataDetail?.describe}</p>
          <Button
            as={Link}
            href="https://www.facebook.com/khanhannest.111"
            className={cx("lienhe")}
          >
            Liên hệ
          </Button>
        </div>
      </div>
      <div className={cx("detail-main")}>
        <div className={cx("detail-title")}>
          <h2 style={{ marginLeft: 0 }}>{dataDetail?.name}</h2>
          <p>Yến sào khánh hoà khoẻ & đẹp</p>
        </div>
        <div className={cx("detail-hed")}>
          <div className={cx("detail-item")}>
            <h3>THÔNG TIN SẢN PHẨM</h3>
            {lines &&
              lines.map((line, index) => <p key={index}>{line.trim()}</p>)}
          </div>
          <div className={cx("detail-item")}>
            <h3>CÔNG DỤNG</h3>
            {manual &&
              manual.map((line, index) => <p key={index}>{line.trim()}</p>)}
          </div>
        </div>
        <div className={cx("detail-img")}>
          <Image
            width={500}
            height={500}
            src={dataDetail?.img2}
            alt="img-detail1"
          />
          <Image
            width={500}
            height={500}
            src={dataDetail?.img3}
            alt="img-detail1"
          />
        </div>
        <div className={cx("detail-item-bt")}>
          <h3
            style={{ fontWeight: "bold", height: "50px", lineHeight: "50px" }}
          >
            HƯỚNG DẪN SỬ DỤNG
          </h3>
          {use && use.map((line, index) => <p key={index}>{line.trim()}</p>)}
        </div>
        <div className={cx("detail-item-bt")}>
          <h3
            style={{ fontWeight: "bold", height: "50px", lineHeight: "50px" }}
          >
            HƯỚNG DẪN BẢO QUẢN
          </h3>
          {preserve &&
            preserve.map((line, index) => <p key={index}>{line.trim()}</p>)}
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
          <li data-aos="fade-up">
            <BiSupport className={cx("cont-icon")} />
            <p>Hỗ trợ đổi trả khi sản phẩm gặp vấn đề Miễn phí.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
