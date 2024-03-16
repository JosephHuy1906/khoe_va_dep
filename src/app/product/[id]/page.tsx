import ProductDetailPage from "@/pages/productDetail/ProductDetail.page";
interface IImg {
  id: number;
  url: string;
}
type detail = {
  id: string;
  title: string;
  price: string;
  img: IImg[];
};
export function generateStaticParams() {
  const listDT = [
    {
      id: "1",
      image: "product-dang-cap-sang-an.jpg",
      title: "Đẳng cấp sàng ăn",
      price: "5000000",
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
      price: "2000000",
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
      price: "4200000",
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
      price: "39000",
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
  return listDT.map((item) => ({ id: item.id }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = generateStaticParams().find(
    (item: any) => item.id === id
  ) as detail;

  return <ProductDetailPage data={data} />;
}
