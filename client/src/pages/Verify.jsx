import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from '@/context/CartContext';

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        console.log("No token found, redirecting to cart");
        navigate("/cart");
        return;
      }

      console.log("Verifying payment with:", { success, orderId });

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      console.log("Verification response:", response.data);

      if (response.data.success) {
        console.log("Payment successful, clearing cart and redirecting to my-orders");
        setCartItems([]);
        navigate("/my-orders");
      } else {
        console.log("Payment failed, redirecting to cart");
        navigate("/cart");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      console.error("Error response:", error.response?.data);
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-lg font-semibold text-gray-700">
        Verifying payment, please wait...
      </h2>
    </div>
  );
};

export default Verify;
