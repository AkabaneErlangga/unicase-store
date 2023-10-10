import { Package } from "lucide-react";

const ProductCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-between bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <img
          src={data?.primary_image?.resize300}
          alt={data.name}
          className="h-full"
        />
      </div>
      <div>
        <p className="font-semibold text-lg text-left">{data.name}</p>
      </div>
      <div className="flex align-bottom justify-between">
        <p className="font-semibold text-lg">{data.price.text_idr}</p>
        <div className="flex space-x-1">
          <Package />
          <p>{data.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
