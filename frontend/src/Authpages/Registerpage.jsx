import { useState , useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../assets/logo.jpg";


function RegisterPage() {
  const navigate = useNavigate();
  const [barangays, setBarangays] = useState([]);


  useEffect(() => {
  const fetchBarangays = async () => {
    try {
      const response = await api.get("/barangays");
      setBarangays(response.data);
    } catch (error) {
      console.log("Failed to fetch barangays:", error);
    }
  };

  fetchBarangays();
}, []);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    address: "",
    barangay: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await api.post("/register", {
      first_name: form.firstName,
      last_name: form.lastName,
      contact_number: form.contactNumber,
      address: form.address,
      barangay_id: form.barangay,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
    });

    console.log("Registration successful:", response.data);

    alert("Account created successfully!");
    navigate("/login");

  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);

    alert(
      error.response?.data?.message ||
      "Registration failed. Please try again."
    );
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F8F4] px-6 py-12">
      <div className="w-full max-w-lg">
        <div className="rounded-lg border border-[#e4e7e1] bg-white p-8 shadow-sm md:p-10">

          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Tagoloan municipal seal"
              className="h-14 w-14"
            />

            <p className="font-display mt-4 text-xl font-semibold text-[#123B25]">
              Create a Citizen Account
            </p>

            <p className="mt-1 text-sm text-[#3f4a43]">
              Register to submit and track complaints with CiviServe
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* First Name + Last Name */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#16221B]"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#16221B]"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
                />
              </div>

            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-[#16221B]"
              >
                Contact Number
              </label>

              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                required
                placeholder="09XX XXX XXXX"
                value={form.contactNumber}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-[#16221B]"
              >
                Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                required
                placeholder="House/Street, Purok"
                value={form.address}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Barangay */}
            <div>
              <label
                htmlFor="barangay"
                className="block text-sm font-medium text-[#16221B]"
              >
                Barangay
              </label>

              <select
                id="barangay"
                name="barangay"
                required
                value={form.barangay}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] bg-white px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              >
                <option value="" disabled>
                  Select your barangay
                </option>

                {barangays.map((barangay) => (
                  <option key={barangay.id} value={barangay.id}>
                    {barangay.barangay_name}
                  </option>
                ))}
              </select>

              <p className="mt-1.5 text-xs text-[#7f9a8a]">
                Used to route barangay-level complaints to your Barangay Head
              </p>
            </div>

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
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#16221B]"
              >
                Password
              </label>

              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#16221B]"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded bg-[#1F7A4D] px-4 py-3 font-medium text-white transition-colors hover:bg-[#123B25]"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-[#3f4a43]">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-[#1F7A4D] hover:underline"
            >
              Log in
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default RegisterPage;