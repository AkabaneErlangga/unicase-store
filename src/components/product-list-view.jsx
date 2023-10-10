import ProductCardList from "./product-card-list";

const ProductListView = ({ products }) => {
  return (
    <div className="space-y-2">
      {products &&
        products.map((product) => (
          <ProductCardList data={product} key={product.product_id} />
        ))}
    </div>
  );
};

export default ProductListView;
