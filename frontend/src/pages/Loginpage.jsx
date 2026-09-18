import { useState } from "react";
import api from "../services/api";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
  e.preventDefault();

  

  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    localStorage.setItem("token", response.data.token);

    localStorage.setItem("user", JSON.stringify(response.data.user));

    navigate('/admin');

    console.log("Login successful!");
    console.log("Token saved!");

  } catch (error) {
    console.log("STATUS:",error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE", error.message);
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F8F4] px-6 py-12">
      <div className="w-full max-w-md">

        <div className="rounded-lg border border-[#e4e7e1] bg-white p-8 shadow-sm md:p-10">

          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Tagoloan municipal seal"
              className="h-14 w-14"
            />

            <p className="font-display mt-4 text-xl font-semibold text-[#123B25]">
              CiviServe
            </p>

            <p className="mt-1 text-sm text-[#3f4a43]">
              Log in to submit and track your complaints
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#16221B]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#16221B]"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm text-[#1F7A4D] hover:underline"
                >
                  Forgot password?
                </a>

              </div>

              <div className="relative mt-2">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded border border-[#d4d8d0] px-4 py-2.5 pr-11 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7f9a8a]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded bg-[#1F7A4D] px-4 py-3 font-medium text-white transition-colors hover:bg-[#123B25]"
            >
              Log In
            </button>

          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-[#3f4a43]">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-[#1F7A4D] hover:underline"
            >
              Register as a citizen
            </a>
          </p>

        </div>

        <p className="mt-6 text-center text-xs text-[#7f9a8a]">
          LGU staff and barangay accounts are provided by the Municipality of Tagoloan.
        </p>

      </div>
    </div>
  );
}

export default LoginPage;