import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Custom404 = () => {
  return (
    <div className="content-center">
      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>404</h2>
          <p style={{ marginTop: 5, fontSize: "1.5rem " }}>
            Đường dẫn không đúng ⚠️
          </p>
        </div>
        <Image
          width={500}
          height="487"
          alt="error-illustration"
          src="/images/404.png"
        />
        <Link passHref href="/">
          <Button type="button" color="warning">
            Trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
