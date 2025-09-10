import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from 'react-toastify';

const Login = () => {
  const [mode, setMode] = useState("login");
  const { backendUrl, setToken, token } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    try {
      let res;
      e.preventDefault();
      if (mode === "signup") {
          res= await axios.post(`${backendUrl}/api/user/signup`, {
          name,
          email,
          password,
        });
      } else { 
          res= await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      }
      if(res.data.success){
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        toast.success(res.data.message);
        setEmail('');
        setPassword('');
        setName('');
        navigate('/');
      }}
      catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">
        {mode}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <input
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            required
          />
        )}
        <input
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {mode === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-4 text-gray-600">
        {mode === "signup" ? "Already have an account?" : "Don’t have an account?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "signup" ? "login" : "signup")}
          className="text-blue-600 hover:underline"
        >
          {mode === "signup" ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default Login;
