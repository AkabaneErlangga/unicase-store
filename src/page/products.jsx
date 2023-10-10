import axios from "axios";

import { useEffect, useState } from "react";
import ProductGridView from "../components/product-grid-view";
import ProductListView from "../components/product-list-view";
import { Grid2X2, Menu } from "lucide-react";

const ProductPage = () => {
  const [products, setProducts] = useState();
  const [view, setView] = useState("grid");
  useEffect(() => {
    axios
      .get("http://localhost:3000/data/produk.json")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const onClickHandler = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  return (
    <div className="grid grid-cols-5 gap-x-8 px-4 lg:px-12">
      <div className="border-r-2">
        <button className="p-1 rounded-lg border hover:bg-slate-200" onClick={onClickHandler}>
          {view === "grid" ? <Menu /> : <Grid2X2 />}
        </button>
      </div>
      <div className="col-span-4">
        {view === "grid" ? (
          <ProductGridView products={products} />
        ) : (
          <ProductListView products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
