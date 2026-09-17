import { useState } from "react";
import api from "../services/api";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);


        try {
            const response = await api.post("/login", {
                email: email,
                password: password,
            });

            console.log ("Login Successfully!"),
            console.log(response.data)
        } catch (error) {
            console.error(
                "Login Failed:",
                error.response?.data
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                {/* Logo */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-[#0F2A43]">
                        Civi<span className="text-[#2563EB]">Serve</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Your Concern. Our Action.
                    </p>
                </div>

                {/* Title */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Welcome Back
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Login to your CiviServe account.
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#2563EB] px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>

                {/* Register */}
                <p className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-[#2563EB] hover:underline"
                    >
                        Register
                    </a>
                </p>

                {/* Back */}
                <div className="mt-5 text-center">
                    <a
                        href="/"
                        className="text-sm text-slate-500 hover:text-[#2563EB]"
                    >
                        ← Back to Home
                    </a>
                </div>

            </div>

        </div>
    );
}

    export default LoginPage;

