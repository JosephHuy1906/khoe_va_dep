import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./buton.module.scss";
import { GoMoveToTop } from "react-icons/go";
import { FaAngleUp } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

const cx = classNames.bind(styles);
export default function GoTopComponent() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={cx("top-to-btm")}>
      {" "}
      {showTopBtn && (
        <Button
          className={cx("goTop")}
          isIconOnly
          color="danger"
          aria-label="Like"
          onClick={goToTop}
        >
          <FaAngleUp className="icon-position icon-style" />
        </Button>
      )}{" "}
    </div>
  );
}
