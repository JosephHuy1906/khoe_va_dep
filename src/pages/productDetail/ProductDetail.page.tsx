"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./ProductDetail.module.scss";
import { FaStar, FaTruckMoving } from "react-icons/fa6";
import { BsBox2Heart } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Button, Image } from "@nextui-org/react";

const cx = classNames.bind(style);

const listDT = [
  {
    id: "1",
    image: "product-dang-cap-sang-an.jpg",
    title: "Đẳng cấp sành ăn",
    price: "5,200,000",
    img: [
      {
        id: 1,
        url: "product-dang-cap-sang-an.jpg",
      },
      {
        id: 2,
        url: "img1.jpg",
      },
      {
        id: 3,
        url: "img2.jpg",
      },
      {
        id: 4,
        url: "img3.jpg",
      },
    ],
  },
  {
    id: "2",
    image: "product-trai-nghiem-thu-vi.jpg",
    title: "Trải nghiệm thú vị",
    price: "4,400,000",
    img: [
      {
        id: 1,
        url: "product-trai-nghiem-thu-vi.jpg",
      },
      {
        id: 2,
        url: "img1.jpg",
      },
      {
        id: 3,
        url: "img2.jpg",
      },
      {
        id: 4,
        url: "img3.jpg",
      },
    ],
  },
  {
    id: "3",
    image: "product-vi-ngon-cao-cap.jpg",
    title: "Vị ngon cao cấp",
    price: "2,500,000",
    img: [
      {
        id: 1,
        url: "product-vi-ngon-cao-cap.jpg",
      },
      {
        id: 2,
        url: "img1.jpg",
      },
      {
        id: 3,
        url: "img2.jpg",
      },
      {
        id: 4,
        url: "img3.jpg",
      },
    ],
  },
  {
    id: "4",
    image: "product-khoe-dep-duong-nhan.jpg",
    title: "Khoẻ & đẹp dưỡng nhan",
    price: "59,000",
    img: [
      {
        id: 1,
        url: "product-khoe-dep-duong-nhan.jpg",
      },
      {
        id: 2,
        url: "img1.jpg",
      },
      {
        id: 3,
        url: "img2.jpg",
      },
      {
        id: 4,
        url: "img3.jpg",
      },
    ],
  },
];
interface IImg {
  id: number;
  url: string;
}
type dataDetail = {
  data: {
    id: string;
    title: string;
    price: string;
    img: IImg[];
  };
};
interface IDetail {
  id: string;
  title: string;
  price: string;
  img: IImg[];
}
export default function ProductDetailPage({ data }: dataDetail) {
  const dt = listDT.find((e) => (e?.id || "") === (data?.id || ""));
  const [selectedImg, setSelectedImg] = useState<string>(dt?.img[0].url || "");
  const [dataDetail, setDataDetail] = useState<IDetail | null>(null);

  useEffect(() => {
    if (data && data.id) {
      if (dt) {
        setDataDetail(dt);
      }
    }
  }, [data, dt]);

  const handleImgClick = (url: string) => {
    setSelectedImg(url);
  };

  return (
    <div className={cx("product-all")}>
      <h2>Trang chủ / Chi tiết sản phẩm</h2>
      <div className={cx("slide-show")}>
        <div className={cx("slide-img")}>
          <Image
            src={"/images/" + selectedImg}
            width={500}
            height={500}
            alt="img-main"
            className={cx("img-main")}
          />
          <div className={cx("list-img")}>
            {dataDetail?.img.map((e) => (
              <Image
                key={e.id}
                src={"/images/" + e.url}
                width={100}
                height={100}
                alt="img-main"
                onClick={() => handleImgClick(e.url)}
                className={cx("thumbnail", {
                  "thumbnail-active": e.url === selectedImg,
                })}
              />
            ))}
          </div>
        </div>
        <div className={cx("slide-title")}>
          <h2>{dataDetail?.title}</h2>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam porro
            ab harum modi omnis sed consequatur, exercitationem neque doloremque
            repellat nihil blanditiis, nulla hic dolore unde autem fuga
            reprehenderit enim! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eveniet, molestiae tempore. Iusto reiciendis
            debitis nemo voluptas est, nostrum ratione a at amet ipsum harum
            hic, eligendi, quisquam ab incidunt obcaecati?
          </p>
          <Button className={cx("lienhe")}>Liên hệ</Button>
        </div>
      </div>
      <div className={cx("detail-main")}>
        <div className={cx("detail-title")}>
          <h2>{dataDetail?.title}</h2>
          <p>Yến sào khánh hoà khoẻ & đẹp</p>
        </div>
        <div className={cx("detail-hed")}>
          <div className={cx("detail-item")}>
            <h2>THÔNG TIN SẢN PHẨM</h2>
            <p>- Thương hiệu: Yến sào khánh hoà khoẻ & đẹp</p>
            <p>- Xuất xứ: Việt Nam</p>
            <p>- Màu sắc: Trắng</p>
            <p>- Thành phần: Tổ yến nguyên chất 100%</p>
            <p>- Quy cách đóng gói: Hộp 100g hoặc 50g</p>
            <p>- NSX: Xem trên bao bì sản phẩm</p>
            <p>- HSD: 36 tháng kể từ NSX</p>
          </div>
          <div className={cx("detail-item")}>
            <h2>CÔNG DỤNG</h2>
            <p>
              - Hỗ trợ tăng cường sức khoẻ và hệ miễn dịch, cung cấp dưỡng thiết
              yếu, hồi phục sức khoẻ và sinh lực, giảm quá trình lão hoá, giúp
              da trẻ đẹp, giữ gìn sắc vóc.
            </p>
          </div>
        </div>
        <div className={cx("detail-img")}>
          <Image
            width={500}
            height={500}
            src={"/images/" + dataDetail?.img[1].url}
            alt="img-detail1"
          />
          <Image
            width={500}
            height={500}
            src={"/images/" + dataDetail?.img[2].url}
            alt="img-detail1"
          />
        </div>
        <div className={cx("detail-item")}>
          <h2>HƯỚNG DẪN SỬ DỤNG</h2>
          <p>
            - Ngâm tổ yến vào 1 bát nước sạch khoảng 20-30 phút tuỳ theo loại
            yến và độ dày mỏng của tổ yến cho đến khi tổ yến tơi ra.
          </p>
          <p>
            - Lưu ý không ngâm tổ yến vào nước nóng hoặc ngâm trong nước quá lâu
            gây tan yến, mất dưỡng chất của yến.
          </p>
          <p>- Chưng cách thuỷ bằng nồi chưng từ 15 - 30p</p>
          <p>
            - Kết hợp cùng đường phèn, hạt sen, táo đỏ, long nhãn, gừng,...để
            tăng thêm hương vị.
          </p>
          <p>
            - Thời gian ăn yến tốt nhất trong ngày là khi bụng đói, buổi sáng
            trước khi ăn sáng, buổi tối trước khi đi ngủ 30 phút đến 1 tiếng
            không ăn yến sau 9h30 tôi, giữa hai bữa chính.
          </p>
        </div>
        <div className={cx("detail-item")}>
          <h2>HƯỚNG DẪN BẢO QUẢN</h2>
          <p>
            - Giữ tổ yến ở nơi thoáng mát, tránh ánh nắng mặt trời trực tiếp và
            nơi có độ ẩm cao.
          </p>
          <p>
            - Nên bảo quản tổ yến trong hộp kín hoặc túi nilon hút chân không.
          </p>
          <p>- Sử dụng trong 36 tháng kể từ ngày sản xuất.</p>
          <p>
            {" "}
            - Không dùng sản phẩm khi bị thay đổi kết cấu, có màu sắc hay mùi lạ
          </p>
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
