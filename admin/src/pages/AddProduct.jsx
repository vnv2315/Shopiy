import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const AddProduct = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [images, setImages] = useState([null, null, null, null]);

  const categories = ["Men", "Women", "Kids"];
  const subCategories = ["Topwear", "Lowerwear", "Footwear", "Accessories"];
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("price", price);
      data.append("category", category);
      data.append("subCategory", subCategory);
      data.append("sizes", JSON.stringify(sizes));
      data.append("bestseller", bestseller);

      images.forEach((img, i) => {
        if (img) data.append(`image${i + 1}`, img);
      });

      const res = await axios.post(`${backendUrl}/api/product/add`, data, {
        headers: { token },
      });
      alert(res.data.message);
    } catch (error) {
      alert("Error adding product");
      console.error(error);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
        <span className="material-icons text-blue-600">add_circle</span>
        Add Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Category & SubCategory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="">Select Sub-Category</option>
            {subCategories.map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-medium mb-2 text-gray-700">
            Available Sizes:
          </label>
          <div className="flex flex-wrap gap-3">
            {sizeOptions.map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200"
              >
                <input
                  type="checkbox"
                  value={size}
                  className="accent-blue-500"
                  onChange={(e) => {
                    if (e.target.checked) setSizes((prev) => [...prev, size]);
                    else setSizes((prev) => prev.filter((s) => s !== size));
                  }}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Best Seller */}
        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={bestseller}
            className="accent-blue-500"
            onChange={(e) => setBestseller(e.target.checked)}
          />
          Mark as Best Seller
        </label>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-2 text-gray-700">
            Upload Images (max 4):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <label
                key={i}
                className="w-full h-32 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg cursor-pointer overflow-hidden hover:bg-gray-200 transition"
              >
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-2xl font-bold">+</span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(i, e.target.files[0])}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
