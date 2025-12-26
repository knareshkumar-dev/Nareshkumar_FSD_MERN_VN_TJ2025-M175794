import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      if (currentState === "Sign Up") {
        if (name && email && password) {
          const mockToken = "mock_token_" + Date.now();
          setToken(mockToken);
          localStorage.setItem("token", mockToken);
          localStorage.setItem("user", JSON.stringify({ name, email }));
          toast.success("Account created successfully!");
          navigate("/");
        } else {
          toast.error("Please fill all fields");
        }
      } else {
        if (email && password) {
          const mockToken = "mock_token_" + Date.now();
          setToken(mockToken);
          localStorage.setItem("token", mockToken);
          localStorage.setItem("user", JSON.stringify({ email }));
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error("Please fill all fields");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Please check your details and try again.");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="section-padding bg-secondary">
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto bg-card rounded-3xl shadow-2xl card-spacing">
        <div className="inline-flex items-center gap-3 mb-8">
          <p className="text-4xl prata-regular text-brand">{currentState}</p>
          <hr className="border-none h-[2px] w-12 bg-brand rounded-full" />
        </div>
        
        <div className="w-full space-y-6">
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand focus:outline-none transition-all"
              placeholder="Full Name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand focus:outline-none transition-all"
            placeholder="Email Address"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-brand focus:outline-none transition-all"
            placeholder="Password"
            required
          />
        </div>
        
        <div className="flex justify-between w-full text-sm mt-4 mb-6">
          <p className="cursor-pointer text-brand hover:underline font-medium">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-brand hover:underline font-medium"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-brand hover:underline font-medium"
            >
              Login here
            </p>
          )}
        </div>
        
        <button className="btn-primary w-full">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;