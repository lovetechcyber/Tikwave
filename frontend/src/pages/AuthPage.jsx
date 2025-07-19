import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function AuthPage() {
  const { login, register } = useAuth();
  const { language, changeLanguage } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(email, password);
    } else {
      await register(email, password, language);
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-orange-500 flex flex-col justify-center items-center text-white px-10">
        <h1 className="text-4xl font-bold mb-4">You are home</h1>
        <p className="text-xl">Welcome to your financial sanctuary</p>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center px-10 py-12">
        <h2 className="text-orange-500 font-bold text-xl mb-2">● Tikwave</h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {isLogin ? "Sign in to your account" : "Create your account"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <input type="email" required placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md">
            {isLogin ? "Sign in" : "Sign up"}
          </button>
        </form>

        <div className="text-sm mt-4">
          {isLogin ? (
            <p>Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-orange-600 font-semibold">Get started</button>
            </p>
          ) : (
            <p>Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="text-orange-600 font-semibold">Sign in</button>
            </p>
          )}
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Select your language</p>
          <div className="flex flex-wrap gap-2">
            {["English", "Yoruba", "Swahili", "Hausa", "French"].map((lang, i) => (
              <button key={i} onClick={() => changeLanguage(lang)}
                className="border border-orange-500 text-orange-600 px-3 py-1 rounded-md text-sm">
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
