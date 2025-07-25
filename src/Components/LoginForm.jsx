import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import smarterpImg from "../assets/smarterp.png";
import ParticlesBackground from "./ParticlesBackground";
import { useAuth } from "../context/AuthContext.jsx";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setCompany } = useAuth();

  const [form, setForm] = useState({
    company: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formError) setFormError("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.company.trim()) newErrors.company = "Company is required!";
    if (!form.username.trim()) newErrors.username = "Username is required!";
    if (!form.password.trim()) newErrors.password = "Password is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (
        form.username === "admin@smarterp.com" &&
        form.password === "password123"
      ) {
        setCompany(form.company); // Save selected company globally
        navigate("/home");
      } else {
        setFormError("Wrong username or password!");
      }
    } catch (err) {
      setFormError("An error occurred. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center relative backdrop-blur-sm">
      <ParticlesBackground />
        <img
        src="https://turbotech.smarterp.app/images/white-technology-background.webp"
        alt="v2-cover"
        className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-50"
      />
      <section className="relative flex flex-col items-center justify-center px-10 w-full max-w-md">
        <img src={smarterpImg} alt="logo" className="md:px-10" />
        <h2 className="text-2xl text-center mt-2 mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="relative">
            <select
              name="company"
              className={`w-full appearance-none px-4 py-3 pr-10 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${
                errors.company
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-400 focus:ring-primary"
              }`}
              value={form.company}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select a company
              </option>
              <option value="Smart ERP">Smart ERP</option>
              <option value="Turbo Tech App">Turbo Tech App</option>
              <option value="Red Ant">Red Ant</option>
              <option value="King Mart">King Mart</option>
              <option value="Loan">Loan</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <LuChevronDown />
            </div>
            {errors.company && (
              <p className="text-red-500 text-sm font-medium">{errors.company}</p>
            )}
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${
              errors.username
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-primary"
            }`}
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 text-sm font-medium">{errors.username}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-primary"
            }`}
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-medium">{errors.password}</p>
          )}

          {formError && (
            <p className="text-center text-red-500 text-sm font-medium">
              {formError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "LOGIN"}
          </button>

          <div className="text-center mt-2">
            <Link to="/forgot-password" className="text-sm text-gray-900 hover:text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
