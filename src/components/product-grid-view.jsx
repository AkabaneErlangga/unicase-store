import ProductCard from "./product-card";

const ProductGridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products &&
        products.map((product) => (
          <ProductCard data={product} key={product.product_id} />
        ))}
    </div>
  );
};

export default ProductGridView;
