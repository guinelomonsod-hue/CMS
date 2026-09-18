import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  Bell,
  User,
  LogOut,
  PlusCircle,
  Search,
} from 'lucide-react'
import logo from '../assets/logo.jpg'

const stats = [
  { label: 'Total Filed', value: 5 },
  { label: 'Pending', value: 1 },
  { label: 'In Progress', value: 2 },
  { label: 'Resolved', value: 2 },
]

const myComplaints = [
  {
    id: 'CMP-2026-00131',
    category: 'Roads & Infrastructure',
    status: 'Pending',
    date: 'Sep 18, 2026',
  },
  {
    id: 'CMP-2026-00119',
    category: 'Waste Management',
    status: 'In Progress',
    date: 'Sep 10, 2026',
  },
  {
    id: 'CMP-2026-00104',
    category: 'Barangay Concerns',
    status: 'Resolved',
    date: 'Aug 28, 2026',
  },
  {
    id: 'CMP-2026-00097',
    category: 'Water & Utilities',
    status: 'In Progress',
    date: 'Aug 20, 2026',
  },
  {
    id: 'CMP-2026-00081',
    category: 'Peace & Order',
    status: 'Resolved',
    date: 'Aug 5, 2026',
  },
]

const notifications = [
  'CMP-2026-00131 was submitted and is awaiting review.',
  'CMP-2026-00119 was updated to "In Progress" by Waste Management.',
  'CMP-2026-00104 was marked Resolved — feedback requested.',
]

const statusStyles = {
  Pending: 'bg-[#f7ebeb] text-[#9a3f3f]',
  'In Progress': 'bg-[#f7f1e2] text-[#B08D2B]',
  Resolved: 'bg-[#e9f4ee] text-[#1F7A4D]',
}

const navItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/citizen',
    active: true,
  },
  {
    label: 'My Complaints',
    icon: ClipboardList,
    href: '/citizen/complaints',
  },
  {
    label: 'Submit Complaint',
    icon: FileText,
    href: '/citizen/submit',
  },
  {
    label: 'Notifications',
    icon: Bell,
    href: '/citizen/notifications',
  },
  {
    label: 'Profile',
    icon: User,
    href: '/citizen/profile',
  },
]

function CitizenDashboard() {
  return (
    <div className="flex min-h-screen bg-[#F7F8F4]">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-[#e4e7e1] bg-white md:flex">
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-[#e4e7e1] px-6 py-5">
          <img
            src={logo}
            alt="Tagoloan municipal seal"
            className="h-9 w-9"
          />

          <span className="font-display text-lg font-semibold text-[#123B25]">
            CiviServe
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-[#1F7A4D] text-white'
                    : 'text-[#3f4a43] hover:bg-[#F7F8F4]'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-[#e4e7e1] px-3 py-4">
          <a
            href="/"
            className="flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium text-[#9a3f3f] hover:bg-[#f7ebeb]"
          >
            <LogOut size={18} />
            Log Out
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between border-b border-[#e4e7e1] bg-white px-6 py-4 md:px-8">
          <div>
            <h1 className="font-display text-xl font-semibold text-[#123B25]">
              Welcome, Maria
            </h1>

            <p className="text-sm text-[#7f9a8a]">
              Here's what's happening with your complaints
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-[#16221B]">
                Maria Santos
              </p>

              <p className="text-xs text-[#7f9a8a]">
                Citizen
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F7A4D] text-sm font-semibold text-white">
              M
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="p-6 md:p-8">
          {/* Quick actions */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Submit Complaint */}
            <a
              href="/citizen/submit"
              className="flex items-center gap-4 rounded-lg border border-[#e4e7e1] bg-white p-5 transition-all hover:border-[#1F7A4D] hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F7A4D]">
                <PlusCircle className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="font-display font-semibold text-[#123B25]">
                  Submit a Complaint
                </p>

                <p className="text-sm text-[#7f9a8a]">
                  File a new concern
                </p>
              </div>
            </a>

            {/* Track Complaint */}
            <a
              href="/citizen/complaints"
              className="flex items-center gap-4 rounded-lg border border-[#e4e7e1] bg-white p-5 transition-all hover:border-[#1F7A4D] hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F8F4] ring-1 ring-[#e4e7e1]">
                <Search className="h-5 w-5 text-[#1F7A4D]" />
              </div>

              <div>
                <p className="font-display font-semibold text-[#123B25]">
                  Track a Complaint
                </p>

                <p className="text-sm text-[#7f9a8a]">
                  Check status by number
                </p>
              </div>
            </a>
          </div>

          {/* Stat cards */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-[#e4e7e1] bg-white p-5"
              >
                <p className="text-2xl font-semibold text-[#123B25]">
                  {s.value}
                </p>

                <p className="mt-1 text-sm text-[#7f9a8a]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* My complaints */}
            <div className="rounded-lg border border-[#e4e7e1] bg-white p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold text-[#123B25]">
                My Complaints
              </h2>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#e4e7e1] text-xs uppercase text-[#7f9a8a]">
                      <th className="pb-3 pr-4 font-medium">
                        Tracking No.
                      </th>

                      <th className="pb-3 pr-4 font-medium">
                        Category
                      </th>

                      <th className="pb-3 pr-4 font-medium">
                        Status
                      </th>

                      <th className="pb-3 font-medium">
                        Date Filed
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {myComplaints.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b border-[#f0f2ee] last:border-0"
                      >
                        <td className="py-3 pr-4 font-medium text-[#123B25]">
                          {c.id}
                        </td>

                        <td className="py-3 pr-4 text-[#3f4a43]">
                          {c.category}
                        </td>

                        <td className="py-3 pr-4">
                          <span
                            className={`rounded px-2.5 py-1 text-xs font-medium ${statusStyles[c.status]}`}
                          >
                            {c.status}
                          </span>
                        </td>

                        <td className="py-3 text-[#7f9a8a]">
                          {c.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-lg border border-[#e4e7e1] bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-[#123B25]">
                Notifications
              </h2>

              <ul className="mt-4 space-y-3">
                {notifications.map((n, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-[#1F7A4D] pl-3 text-sm text-[#3f4a43]"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CitizenDashboard

