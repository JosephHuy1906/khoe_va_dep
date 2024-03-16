import React from "react";
import classNames from "classnames/bind";
import style from "./Product.module.scss";
import { FaTruckMoving } from "react-icons/fa6";
import { BsBox2Heart } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const cx = classNames.bind(style);

export default function ProductPage() {
  return (
    <div className={cx("product-all")}>
      <h2>Tất cả sản phẩm</h2>

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
