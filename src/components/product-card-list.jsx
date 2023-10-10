import { Package } from "lucide-react";

const ProductCardList = ({ data }) => {
  return (
    <div className="flex bg-white group cursor-pointer rounded-xl border p-3 space-x-4">
      <img
        src={data?.primary_image?.resize300}
        alt={data.name}
        className="h-60"
      />
      <div className="flex flex-col space-y-2 text-left">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="font-semibold text-lg">{data.price.text_idr}</p>
        <div className="flex space-x-1">
          <Package />
          <p>{data.stock}</p>
        </div>
        <div className="flex">
          <img src={data.badge[0].image_url} alt="title-icon" className="h-7"/>
          <p>{data.badge[0].title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;
