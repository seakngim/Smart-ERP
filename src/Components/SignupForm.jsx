import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import smarterpImg from "../assets/smarterp.png";
import ParticlesBackground from "./ParticlesBackground";

const SignupForm = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setMessage("");
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.email.trim()) newErrors.email = "Email is required!";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format!";
        if (!form.username.trim()) newErrors.username = "Username is required!";
        if (!form.password.trim()) newErrors.password = "Password is required!";
        if (!form.confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password!";
        else if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match!";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage("Signup successful!");
            setForm({
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
            });

            // Optional: redirect after signup
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen flex justify-center items-center relative backdrop-blur-sm">
            <ParticlesBackground />
            <img
                src="https://turbotech.smarterp.app/images/white-technology-background.webp"
                alt="background"
                className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-50"
            />

            <section className="relative flex flex-col items-center justify-center px-10 w-full max-w-md">
                <img src={smarterpImg} alt="logo" className="md:px-10" />
                <h2 className="text-2xl text-center mt-2 mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-primary"
                            }`}
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm font-medium">{errors.email}</p>}

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${errors.username ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-primary"
                            }`}
                        value={form.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm font-medium">{errors.username}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-primary"
                            }`}
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm font-medium">{errors.password}</p>}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${errors.confirmPassword
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-400 focus:ring-primary"
                            }`}
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm font-medium">{errors.confirmPassword}</p>
                    )}

                    {message && (
                        <p className={`text-center text-sm font-medium ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Signing up..." : "SIGN UP"}
                    </button>

                    <div className="text-center mt-2">
                        <Link to="/" className="text-sm text-gray-900 hover:text-primary hover:underline">
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default SignupForm;
