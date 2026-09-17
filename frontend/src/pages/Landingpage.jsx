function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-700">
          CiviServe
        </h1>

        <div className="flex items-center gap-6">
          <a href="/" className="text-gray-700">
            Home
          </a>

          <a href="#about" className="text-gray-700">
            About
          </a>

          <a
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[550px] items-center justify-center px-6">
        <div className="max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Complaint Management & Citizen Feedback
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Your Concern.
            <br />
            <span className="text-blue-600">
              Our Action.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            CiviServe provides a simple and convenient way for citizens
            to submit and monitor their complaints.
          </p>

          <div className="mt-8">
            <a
              href="/login"
              className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Submit a Complaint
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">

          <h3 className="text-3xl font-bold text-gray-900">
            About CiviServe
          </h3>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            CiviServe is a web-based platform designed to help citizens
            submit complaints and monitor their status while providing
            LGU personnel with an organized way to manage citizen concerns.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-8 text-center text-white">
        <p className="font-bold">
          CiviServe
        </p>

        <p className="mt-1 text-sm text-gray-400">
          Your Concern. Our Action.
        </p>

        <p className="mt-3 text-xs text-gray-500">
          © 2026 CiviServe
        </p>
      </footer>

    </div>
  );
}

export default LandingPage;

