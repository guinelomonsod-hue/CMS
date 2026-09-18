import {
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Users,
  Activity,
  Settings,
  LogOut,
  Clock,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import logo from '../assets/logo.jpg'

const stats = [
  { label: 'Total Complaints', value: 248, icon: ClipboardList },
  { label: 'Pending', value: 32, icon: AlertCircle },
  { label: 'In Progress', value: 61, icon: Clock },
  { label: 'Resolved', value: 155, icon: CheckCircle2 },
]

const statusBreakdown = [
  { label: 'Resolved', count: 155, color: 'bg-[#1F7A4D]' },
  { label: 'In Progress', count: 61, color: 'bg-[#B08D2B]' },
  { label: 'Pending', count: 32, color: 'bg-[#9a3f3f]' },
]

const recentComplaints = [
  {
    id: 'CMP-2026-00131',
    citizen: 'Maria Santos',
    category: 'Roads & Infrastructure',
    status: 'Pending',
    date: 'Sep 18, 2026',
  },
  {
    id: 'CMP-2026-00130',
    citizen: 'Juan Dela Cruz',
    category: 'Waste Management',
    status: 'In Progress',
    date: 'Sep 17, 2026',
  },
  {
    id: 'CMP-2026-00129',
    citizen: 'Ana Reyes',
    category: 'Barangay Concerns',
    status: 'Resolved',
    date: 'Sep 16, 2026',
  },
  {
    id: 'CMP-2026-00128',
    citizen: 'Pedro Ramos',
    category: 'Water & Utilities',
    status: 'In Progress',
    date: 'Sep 16, 2026',
  },
  {
    id: 'CMP-2026-00127',
    citizen: 'Liza Gomez',
    category: 'Peace & Order',
    status: 'Pending',
    date: 'Sep 15, 2026',
  },
]

const recentActivity = [
  'Department Head reassigned CMP-2026-00126 to Public Services',
  'Barangay Head resolved CMP-2026-00121',
  'New citizen account registered: Liza Gomez',
  'Category "Barangay Concerns" updated by Admin',
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
    href: '/admin',
    active: true,
  },
  {
    label: 'Complaint Management',
    icon: ClipboardList,
    href: '/admin/complaints',
  },
  {
    label: 'Citizen Feedback',
    icon: MessageSquare,
    href: '/admin/feedback',
  },
  {
    label: 'Reports',
    icon: BarChart3,
    href: '/admin/reports',
  },
  {
    label: 'User Management',
    icon: Users,
    href: '/admin/users',
  },
  {
    label: 'Activity Log',
    icon: Activity,
    href: '/admin/activity',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
]

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

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
              Dashboard
            </h1>

            <p className="text-sm text-[#7f9a8a]">
              Municipality of Tagoloan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-[#16221B]">
                Admin
              </p>

              <p className="text-xs text-[#7f9a8a]">
                System Administrator
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F7A4D] text-sm font-semibold text-white">
              A
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="p-6 md:p-8">
          {/* Stat cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon

              return (
                <div
                  key={s.label}
                  className="rounded-lg border border-[#e4e7e1] bg-white p-5"
                >
                  <Icon
                    className="h-5 w-5 text-[#1F7A4D]"
                    strokeWidth={1.5}
                  />

                  <p className="mt-3 text-2xl font-semibold text-[#123B25]">
                    {s.value}
                  </p>

                  <p className="mt-1 text-sm text-[#7f9a8a]">
                    {s.label}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Recent complaints */}
            <div className="rounded-lg border border-[#e4e7e1] bg-white p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold text-[#123B25]">
                Recent Complaints
              </h2>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#e4e7e1] text-xs uppercase text-[#7f9a8a]">
                      <th className="pb-3 pr-4 font-medium">
                        Tracking No.
                      </th>

                      <th className="pb-3 pr-4 font-medium">
                        Citizen
                      </th>

                      <th className="pb-3 pr-4 font-medium">
                        Category
                      </th>

                      <th className="pb-3 pr-4 font-medium">
                        Status
                      </th>

                      <th className="pb-3 font-medium">
                        Date
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentComplaints.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b border-[#f0f2ee] last:border-0"
                      >
                        <td className="py-3 pr-4 font-medium text-[#123B25]">
                          {c.id}
                        </td>

                        <td className="py-3 pr-4 text-[#3f4a43]">
                          {c.citizen}
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

            {/* Right column */}
            <div className="space-y-6">
              {/* Status breakdown */}
              <div className="rounded-lg border border-[#e4e7e1] bg-white p-6">
                <h2 className="font-display text-lg font-semibold text-[#123B25]">
                  Complaint Status
                </h2>

                <div className="mt-4 space-y-3">
                  {statusBreakdown.map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#3f4a43]">
                          {s.label}
                        </span>

                        <span className="font-medium text-[#123B25]">
                          {s.count}
                        </span>
                      </div>

                      <div className="mt-1.5 h-2 rounded-full bg-[#F7F8F4]">
                        <div
                          className={`h-2 rounded-full ${s.color}`}
                          style={{
                            width: `${(s.count / 248) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="rounded-lg border border-[#e4e7e1] bg-white p-6">
                <h2 className="font-display text-lg font-semibold text-[#123B25]">
                  Recent Activity
                </h2>

                <ul className="mt-4 space-y-3">
                  {recentActivity.map((a, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-[#1F7A4D] pl-3 text-sm text-[#3f4a43]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard

