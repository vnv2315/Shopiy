import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { useOutletContext } from "react-router-dom";

const AllProducts = () => {
  const { token } = useOutletContext();
  const [products, setProducts] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/list`);
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await axios.post(`${backendUrl}/api/product/remove`, { id }, {headers: {token}});
      alert(res.data.message);
      if (res.data.success) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-1 max-w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-20 bg-white shadow rounded">
          No products found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((p) => (
                  <tr
                    key={p._id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 py-2">
                      {p.image && p.image.length > 0 ? (
                        <img
                          src={p.image[0]}
                          alt={p.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-md text-gray-400">
                          N/A
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2 text-gray-700 font-medium">{p.name}</td>
                    <td className="px-4 py-2 text-gray-500 hidden sm:table-cell">{p.category}</td>
                    <td className="px-4 py-2 text-gray-700 font-semibold">
                      ₹{p.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(p._id)}
                        className=" bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
