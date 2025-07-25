import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- add useNavigate
import smarterpImg from "../assets/smarterp.png";
import ParticlesBackground from "./ParticlesBackground";

const ForgotPasswordForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError("");
        setMessage("");
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!email.trim()) {
            setError("Email is required!");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address!");
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage("✅ Password reset link sent. Redirecting to Signup...");

            setTimeout(() => {
                navigate("/signup");
            }, 1500); // 1.5s delay before redirecting

        } catch (err) {
            setError("❌ Something went wrong. Please try again.");
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
                <h2 className="text-2xl text-center mt-2 mb-4">Forgot Password</h2>

                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none bg-white/5 focus:ring-2 ${error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-400 focus:ring-primary"
                            }`}
                        value={email}
                        onChange={handleChange}
                    />
                    {error && (
                        <p className="text-red-500 text-sm font-medium">{error}</p>
                    )}

                    {message && (
                        <p className="text-green-600 text-sm font-medium text-center">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className={`w-full bg-primary text-white py-3 rounded-lg font-semibold transition-colors duration-200 ${isSubmitting
                                ? "cursor-not-allowed opacity-70"
                                : "hover:bg-primary/90"
                            }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Processing..." : "Reset Password"}
                    </button>

                    <div className="text-center mt-2">
                        <Link to="/" className="text-sm text-gray-900 hover:text-primary hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default ForgotPasswordForm;
