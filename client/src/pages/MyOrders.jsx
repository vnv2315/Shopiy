import { useState, useEffect, useContext } from 'react';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '@/context/CartContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { backendUrl, token } = useContext(CartContext);

  useEffect(() => {
    if (!token) return;

    const fetchOrders = async () => {
      try {
        let res = await axios.post(
          `${backendUrl}/api/order/orders`,
          {},
          { headers: { token } }
        );
        if (res.data.success) {
          setOrders(res.data.orders.reverse());
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch orders");
      }
    };

    fetchOrders(); // initial fetch
    const interval = setInterval(fetchOrders, 5000); // refresh every 5s

    return () => clearInterval(interval); // cleanup on unmount
  }, [token, backendUrl]);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
          <p className="text-muted-foreground mb-8">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Link to="/collection" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              {/* Order Header */}
              <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">Order {order._id}</h3>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${order.status === "Pending" && "bg-yellow-100 text-yellow-800"}
                      ${order.status === "Processing" && "bg-blue-100 text-blue-800"}
                      ${order.status === "Shipped" && "bg-indigo-100 text-indigo-800"}
                      ${order.status === "Delivered" && "bg-green-100 text-green-800"}
                      ${order.status === "Cancelled" && "bg-red-100 text-red-800"}`}
                  >
                    {order.status}
                  </span>
                  <span className="font-bold">₹{order.amount.toFixed(2)}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">
                          Size: {item.size} • Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-medium">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <h3 className="font-semibold mb-2">Total Orders</h3>
            <p className="text-2xl font-bold text-green-600">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <h3 className="font-semibold mb-2">Total Spent</h3>
            <p className="text-2xl font-bold text-green-600">
              ₹{orders.reduce((sum, order) => sum + order.amount, 0).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
