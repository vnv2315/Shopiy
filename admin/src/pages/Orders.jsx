import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/update`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        fetchOrders();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="material-icons">shopping_cart</span>
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">All orders will be shown here.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm "
            >
              {/* Header */}
              <div className="flex justify-between md:items-center item-left mb-2 flex-col md:flex-row ">
                <h3 className="font-semibold">Order #{order._id}</h3>

                {/* Status dropdown */}
                <select
                  value={order.status || "Pending"}
                  onChange={(e) => statusHandler(e, order._id)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-500">
                Placed on {new Date(order.date).toLocaleDateString()}
              </p>
              {/* Address */}
              <div className="mt-3 text-left text-sm text-gray-700">
                <p>Street: {order.address.street}</p>
                <p>City: {order.address.city}</p>
                <p>State: {order.address.state}</p>
                <p>Zip-Code: {order.address.zipcode}</p>
              </div>

              {/* Items */}
              <div className="mt-3 space-y-2">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm text-gray-700"
                  >
                    <span>
                      {item.name} (x{item.quantity}) - Size {item.size}
                    </span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-3 font-bold text-right">
                Total: ₹{order.amount.toFixed(2)}
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
