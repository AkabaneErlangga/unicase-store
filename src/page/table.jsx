import axios from "axios";
import { BarChartIcon, Table } from "lucide-react";
import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TablePage = () => {
  const [highProducts, setHighProducts] = useState();
  const [lowProducts, setLowProducts] = useState();
  const [view, setView] = useState("table");

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/produk.json")
      .then((res) => {
        const sortedProducts = res.data.data.sort((a, b) => b.stock - a.stock);
        setHighProducts(sortedProducts.slice(0, 10));
        setLowProducts(sortedProducts.slice(-10).reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickHandler = () => {
    setView(view === "table" ? "graph" : "table");
  };

  return (
    <div className="px-10">
      <div className="border-r-2">
        <button
          className="p-1 rounded-lg border hover:bg-slate-200"
          onClick={onClickHandler}
        >
          {view === "table" ? <Table /> : <BarChartIcon />}
        </button>
      </div>
      {highProducts && lowProducts && (
        <>
          <div>
            <h3 className="text-lg font-bold py-4">Highest Stock Products</h3>
            {view === "table" ? (
              <MDBDataTable
                striped
                bordered
                small
                entriesOptions={[1, 2, 4, 5, 10]}
                entries={10}
                sortable={false}
                data={{
                  columns: [
                    {
                      label: "Name",
                      field: "name",
                    },
                    {
                      label: "Price",
                      field: "price",
                    },
                    {
                      label: "Stock",
                      field: "stock",
                    },
                  ],
                  rows: highProducts.map((product) => ({
                    ...product,
                    price: product.price.text_idr,
                  })),
                }}
              />
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={highProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="stock" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          <div className="">
            <h3 className="text-lg font-bold py-4">Lowest Stock Products</h3>
            {view === "table" ? (
              <MDBDataTable
                striped
                bordered
                small
                entriesOptions={[1, 2, 4, 5, 10]}
                entries={10}
                className="text-left"
                data={{
                  columns: [
                    {
                      label: "Name",
                      field: "name",
                    },
                    {
                      label: "Price",
                      field: "price",
                    },
                    {
                      label: "Stock",
                      field: "stock",
                    },
                  ],
                  rows: lowProducts.map((product) => ({
                    ...product,
                    price: product.price.text_idr,
                  })),
                }}
              />
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={lowProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="stock" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TablePage;
