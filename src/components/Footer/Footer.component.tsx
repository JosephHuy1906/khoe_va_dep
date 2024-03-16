import { Divider, Image } from "@nextui-org/react";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {
  FaDoorOpen,
  FaFacebook,
  FaMapLocation,
  FaPhone,
  FaShopify,
  FaTiktok,
} from "react-icons/fa6";
import { FaTimes, FaTimesCircle } from "react-icons/fa";

const cx = classNames.bind(styles);

export default function FooterComponent() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-main")}>
        <div className={cx("footer-logo")}>
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="logo-khoe-va-dep"
          />
          <p>Luôn đặt sự uy tín và chất lượng của sản phẩm lên hàng đầu.</p>
        </div>
        <div className={cx("footer-info")}>
          <div className={cx("menu-list")}>
            <div className={cx("menu")}>
              <h3>Địa chỉ:</h3>
              <ul className={cx("menu-item")}>
                <li>
                  <FaMapLocation className={cx("location")} />
                  <p>254/8/7 Lê Văn Thọ, P.9, Q. Gò Vấp, Tp Hồ Chí Minh</p>
                </li>
              </ul>
            </div>
            <div className={cx("menu")}>
              <h3>Giờ mở cửa:</h3>
              <ul className={cx("menu-item")}>
                <li>
                  <FaDoorOpen className={cx("location")} />
                  <p>Từ thứ 2- chủ nhật: 24/24</p>
                </li>
              </ul>
            </div>
          </div>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhanhannest.111%3Fmibextid%3DZbWKwL&tabs&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=233799905948437"
            width="500"
            className={cx("fanpage")}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <Divider className="my-4" style={{ color: "lightgrey" }} />
        <nav className={cx("btn-list")}>
          <ul>
            <li>
              <a href="https://www.facebook.com/khanhannest.111/">
                <FaFacebook className={cx("facebook")} />
              </a>
              <a href="https://www.facebook.com/khanhannest.111/">Facebook</a>
            </li>
            <li>
              <FaTiktok className={cx("tiktok")} />
              Tik tok
            </li>
            <li>
              <FaShopify className={cx("shopee")} />
              Shopee
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
