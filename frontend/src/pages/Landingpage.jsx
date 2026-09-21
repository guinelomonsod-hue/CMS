import { useState } from 'react'
import logo from '../assets/logo.jpg'
import {
  FileText,
  Search,
  CheckCircle2,
  MessageSquare,
  Construction,
  Trash2,
  ShieldAlert,
  Droplet,
  HeartPulse,
  Users,
  ChevronDown,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Submit',
    text: 'File your complaint online with the relevant details and supporting files.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Track',
    text: 'Use your tracking number to check its status at any time.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Resolve',
    text: 'Barangay officials or LGU staff review, act on, and update the case.',
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'Feedback',
    text: 'Rate the service and share feedback once it is resolved.',
    icon: MessageSquare,
  },
]

const categories = [
  { title: 'Roads & Infrastructure', icon: Construction },
  { title: 'Waste Management', icon: Trash2 },
  { title: 'Peace & Order', icon: ShieldAlert },
  { title: 'Water & Utilities', icon: Droplet },
  { title: 'Health Services', icon: HeartPulse },
  {
    title: 'Barangay Concerns',
    icon: Users,
    tag: 'Routed to your barangay',
  },
]

const trackingSteps = [
  'Submitted',
  'Under Review',
  'In Progress',
  'Resolved',
]

const currentTrackingStep = 2

const faqs = [
  {
    q: 'How do I submit a complaint?',
    a: "Click \"Submit a Complaint,\" fill in the details of your concern, attach any supporting photos or documents, and submit. You'll get a tracking number right away.",
  },
  {
    q: 'How long does resolution take?',
    a: 'It depends on the nature and complexity of the complaint. You can always check the current status using your tracking number.',
  },
  {
    q: 'What happens with barangay-level concerns?',
    a: "Some categories, like noise or minor disputes, go directly to your Barangay Head. If it can't be resolved there, it gets escalated to the relevant LGU department.",
  },
  {
    q: 'Is my information kept confidential?',
    a: 'Your details are only shared with the personnel assigned to handle your specific complaint.',
  },
]

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e4e7e1] bg-white px-6 py-4 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tagoloan municipal seal"
            className="h-10 w-10"
          />

          <span className="font-display text-xl font-semibold text-[#123B25]">
            CiviServe
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-[#16221B] transition-colors hover:text-[#1F7A4D]"
          >
            How It Works
          </a>

          <a
            href="#categories"
            className="text-sm text-[#16221B] transition-colors hover:text-[#1F7A4D]"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-sm text-[#16221B] transition-colors hover:text-[#1F7A4D]"
          >
            About
          </a>

          <a
            href="#faq"
            className="text-sm text-[#16221B] transition-colors hover:text-[#1F7A4D]"
          >
            FAQ
          </a>

          <a
            href="/login"
            className="rounded border border-[#1F7A4D] px-5 py-2 text-sm font-medium text-[#1F7A4D] transition-colors hover:bg-[#1F7A4D] hover:text-white"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-medium text-[#1F7A4D]">
              Municipality of Tagoloan · Complaint Management
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[1.1] text-[#123B25] md:text-6xl">
              Your concern.
              <br />
              Our action.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#3f4a43]">
              CiviServe gives citizens a direct, organized way to file
              complaints, follow their progress, and hear back once
              they're resolved.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/login"
                className="rounded bg-[#1F7A4D] px-7 py-3 text-center font-medium text-white transition-colors hover:bg-[#123B25]"
              >
                Submit a Complaint
              </a>

              <a
                href="#track"
                className="rounded border border-[#d4d8d0] px-7 py-3 text-center font-medium text-[#16221B] transition-colors hover:border-[#1F7A4D]"
              >
                Track Complaint
              </a>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#F7F8F4] ring-1 ring-[#e4e7e1] md:h-80 md:w-80">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white shadow-sm md:h-64 md:w-64">
                <img
                  src={logo}
                  alt="Tagoloan municipal seal"
                  className="h-40 w-40 md:h-44 md:w-44"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 md:px-10">
        <div className="mx-auto mb-4 -mt-4 grid max-w-6xl gap-6 sm:grid-cols-2">

          <a
            href="/submit"
            className="rounded-lg border border-[#e4e7e1] bg-white p-7 transition-all hover:border-[#1F7A4D] hover:shadow-sm"
          >
            <FileText
              className="h-7 w-7 text-[#1F7A4D]"
              strokeWidth={1.5}
            />

            <h3 className="font-display mt-4 text-xl font-semibold text-[#123B25]">
              Submit a Complaint
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#3f4a43]">
              File a new concern with details and supporting documents.
            </p>
          </a>

          <a
            id="track"
            href="/track"
            className="rounded-lg border border-[#e4e7e1] bg-white p-7 transition-all hover:border-[#1F7A4D] hover:shadow-sm"
          >
            <Search
              className="h-7 w-7 text-[#1F7A4D]"
              strokeWidth={1.5}
            />

            <h3 className="font-display mt-4 text-xl font-semibold text-[#123B25]">
              Track Complaint
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#3f4a43]">
              Check the status of a complaint using your tracking number.
            </p>
          </a>

        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-[#F7F8F4] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="font-display text-3xl font-semibold text-[#123B25] md:text-4xl">
            How CiviServe Works
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="border-l-2 border-[#1F7A4D] pl-5"
                >
                  <span className="text-sm font-medium text-[#7f9a8a]">
                    {step.number}
                  </span>

                  <Icon
                    className="mt-2 h-6 w-6 text-[#1F7A4D]"
                    strokeWidth={1.5}
                  />

                  <p className="font-display mt-3 text-lg font-semibold text-[#123B25]">
                    {step.title}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#3f4a43]">
                    {step.text}
                  </p>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* Complaint Categories */}
      <section
        id="categories"
        className="px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-6xl">

          <h2 className="font-display text-3xl font-semibold text-[#123B25] md:text-4xl">
            Complaint Categories
          </h2>

          <p className="mt-4 max-w-xl text-[#3f4a43]">
            Complaints are automatically routed to the right office based
            on category.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

            {categories.map((cat) => {
              const Icon = cat.icon

              return (
                <div
                  key={cat.title}
                  className="rounded-lg border border-[#e4e7e1] bg-white p-6 transition-all hover:border-[#1F7A4D] hover:shadow-sm"
                >
                  <Icon
                    className="h-6 w-6 text-[#1F7A4D]"
                    strokeWidth={1.5}
                  />

                  <p className="font-display mt-4 font-semibold text-[#123B25]">
                    {cat.title}
                  </p>

                  {cat.tag && (
                    <span className="mt-2 inline-block text-xs font-medium text-[#B08D2B]">
                      {cat.tag}
                    </span>
                  )}
                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-[#F7F8F4] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-4xl">

          <h2 className="font-display text-3xl font-semibold text-[#123B25] md:text-4xl">
            About CiviServe
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3f4a43]">
            CiviServe provides citizens with one organized platform for
            submitting complaints, tracking their progress, and receiving
            updates. Barangay officials and LGU department staff can use
            shared complaint records to coordinate the handling of concerns.
          </p>

        </div>
      </section>

      {/* Tracking Preview */}
      <section
        id="tracking-preview"
        className="px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="font-display text-3xl font-semibold text-[#123B25] md:text-4xl">
            Track Your Complaint
          </h2>

          <p className="mt-4 text-[#3f4a43]">
            Enter your tracking number to see exactly where your complaint
            stands.
          </p>

          <div className="mt-10 rounded-lg border border-[#e4e7e1] bg-white p-8 text-left shadow-sm">

            <p className="text-xs font-medium text-[#B08D2B]">
              Sample / demo data
            </p>

            <p className="font-display mt-2 text-lg font-semibold text-[#123B25]">
              CMP-2026-00125
            </p>

            <p className="mt-1 text-sm text-[#3f4a43]">
              Assigned Department: Public Services
            </p>

            <div className="mt-8 flex items-center">

              {trackingSteps.map((label, i) => (
                <div
                  key={label}
                  className="flex flex-1 items-center last:flex-none"
                >

                  <div className="flex flex-col items-center">

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                        i <= currentTrackingStep
                          ? 'bg-[#1F7A4D] text-white'
                          : 'bg-[#F7F8F4] text-[#7f9a8a] ring-1 ring-[#e4e7e1]'
                      }`}
                    >
                      {i + 1}
                    </div>

                    <p className="mt-2 max-w-[70px] text-center text-xs text-[#3f4a43]">
                      {label}
                    </p>

                  </div>

                  {i < trackingSteps.length - 1 && (
                    <div
                      className={`mx-2 h-px flex-1 ${
                        i < currentTrackingStep
                          ? 'bg-[#1F7A4D]'
                          : 'bg-[#e4e7e1]'
                      }`}
                    />
                  )}

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="bg-[#F7F8F4] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-3xl">

          <h2 className="font-display text-3xl font-semibold text-[#123B25] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 divide-y divide-[#e4e7e1] rounded-lg border border-[#e4e7e1] bg-white">

            {faqs.map((item, i) => (
              <div key={item.q}>

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-[#123B25]">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-[#1F7A4D] transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#3f4a43]">
                    {item.a}
                  </p>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#123B25] px-6 py-20 text-center md:px-10">

        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          Have a concern? Let CiviServe know.
        </h2>

        <p className="mt-3 text-[#a9c2b2]">
          Submit your complaint and help improve local public services.
        </p>

        <a
          href="/submit"
          className="mt-8 inline-block rounded bg-white px-8 py-3 font-medium text-[#123B25] transition-colors hover:bg-[#F7F8F4]"
        >
          Submit a Complaint
        </a>

      </section>

      {/* Footer */}
      <footer className="bg-[#0d2a19] px-6 py-14 text-white md:px-10">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Tagoloan municipal seal"
                className="h-10 w-10"
              />

              <span className="font-display text-lg font-semibold">
                CiviServe
              </span>

            </div>

            <p className="mt-3 text-sm text-[#a9c2b2]">
              Your concern. Our action.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Quick Links
            </p>

            <ul className="mt-3 space-y-2 text-sm text-[#a9c2b2]">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="hover:text-white"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="hover:text-white"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Contact
            </p>

            <ul className="mt-3 space-y-2 text-sm text-[#a9c2b2]">
              <li>Municipality of Tagoloan</li>
              <li>civiserve@tagoloan.gov.ph</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Legal
            </p>

            <ul className="mt-3 space-y-2 text-sm text-[#a9c2b2]">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-[#1a4a2d] pt-6 text-xs text-[#7f9a8a]">
          © 2026 CiviServe · Municipality of Tagoloan
        </div>

      </footer>

    </div>
  )
}

export default LandingPage