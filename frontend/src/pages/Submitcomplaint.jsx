import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SubmitComplaint() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    category_id: "",
    subject: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.log("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/complaints",
        {
          category_id: form.category_id,
          subject: form.subject,
          description: form.description,
          location: form.location,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Complaint submitted:", response.data);

      alert("Complaint submitted successfully!");

      navigate("/citizen");
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      console.log("MESSAGE:", error.message);

      alert(
        error.response?.data?.message ||
          "Failed to submit complaint. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F4]">
      {/* Header */}
      <header className="border-b border-[#e4e7e1] bg-white px-6 py-4 md:px-8">
        <button
          type="button"
          onClick={() => navigate("/citizen")}
          className="flex items-center gap-2 text-sm font-medium text-[#3f4a43] hover:text-[#1F7A4D]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl p-6 md:p-8">
        <div className="rounded-lg border border-[#e4e7e1] bg-white p-6 shadow-sm md:p-8">
          <h1 className="font-display text-2xl font-semibold text-[#123B25]">
            Submit a Complaint
          </h1>

          <p className="mt-1 text-sm text-[#7f9a8a]">
            Please provide the details of your concern.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Category */}
            <div>
              <label
                htmlFor="category_id"
                className="block text-sm font-medium text-[#16221B]"
              >
                Category
              </label>

              <select
                id="category_id"
                name="category_id"
                required
                value={form.category_id}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-[#d4d8d0] bg-white px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              >
                <option value="" disabled>
                  Select a category
                </option>

                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#16221B]"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter a short title for your complaint"
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[#16221B]"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                required
                rows="5"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your concern in detail"
                className="mt-2 w-full resize-none rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-[#16221B]"
              >
                Location of Concern
              </label>

              <input
                id="location"
                name="location"
                type="text"
                required
                value={form.location}
                onChange={handleChange}
                placeholder="Street, Purok, or specific location"
                className="mt-2 w-full rounded border border-[#d4d8d0] px-4 py-2.5 text-sm focus:border-[#1F7A4D] focus:outline-none focus:ring-1 focus:ring-[#1F7A4D]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-[#1F7A4D] px-4 py-3 font-medium text-white transition-colors hover:bg-[#123B25] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Complaint"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SubmitComplaint;