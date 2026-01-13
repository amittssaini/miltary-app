import { useState } from "react";
import { Link } from "react-router-dom";


const stats = [
  { title: "Opening Balance", value: 1200 },
  { title: "Closing Balance", value: 980 },
  { title: "Net Movement", value: +120 },
  { title: "Assigned", value: 150 },
  { title: "Expended", value: 70 },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState({
  date: "",
  base: "",
  equipment: "",
});

  return (
    <div className="min-h-screen bg-stone-100 flex relative">

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          ></div>

          <aside className="absolute left-0 top-0 h-full w-64 bg-emerald-900 text-amber-200 p-6 z-50">
            <h2 className="text-2xl font-bold mb-10">
              🪖 Asset Manager
            </h2>

            <nav className="space-y-4">
  <Link to="/dashboard" className="block hover:text-white">
    Dashboard
  </Link>
  <Link to="/purchases" className="block hover:text-white">
    Purchases
  </Link>
  <Link to="/transfers" className="block hover:text-white">
    Transfers
  </Link>
</nav>

          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-emerald-900 text-amber-200 p-6 flex-col">
        <h2 className="text-2xl font-bold mb-10">
          🪖 Asset Manager
        </h2>

       <nav className="space-y-4">
  <Link to="/dashboard" className="block hover:text-white">
    Dashboard
  </Link>
  <Link to="/purchases" className="block hover:text-white">
    Purchases
  </Link>
  <Link to="/transfers" className="block hover:text-white">
    Transfers
  </Link>
</nav>

      </aside>

      {/* Main Content */}
     <main className="flex-1 p-4 sm:p-6 md:p-8">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-900">
      Dashboard
    </h1>
  </div>

  {/* Filters */}
  <div className="bg-white p-4 rounded-xl shadow mb-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      
      {/* Date */}
      <input
        type="date"
        value={filters.date}
        onChange={(e) =>
          setFilters({ ...filters, date: e.target.value })
        }
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
      />

      {/* Base */}
      <select
        value={filters.base}
        onChange={(e) =>
          setFilters({ ...filters, base: e.target.value })
        }
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
      >
        <option value="">Select Base</option>
        <option value="BaseA">Base A</option>
        <option value="BaseB">Base B</option>
        <option value="BaseC">Base C</option>
      </select>

      {/* Equipment */}
      <select
        value={filters.equipment}
        onChange={(e) =>
          setFilters({ ...filters, equipment: e.target.value })
        }
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700"
      >
        <option value="">Equipment Type</option>
        <option value="Weapon">Weapon</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Ammunition">Ammunition</option>
      </select>

    </div>
  </div>

  {/* Cards */}
 <div className="bg-white rounded-xl shadow overflow-x-auto">
  <table className="min-w-full text-sm">
    <thead className="bg-emerald-900 text-amber-200">
      <tr>
        <th className="text-left px-6 py-3">Metric</th>
        <th className="text-left px-6 py-3">Value</th>
        <th className="text-left px-6 py-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {stats.map((item, index) => {
        const isNetMovement = item.title === "Net Movement";

        return (
          <tr
            key={index}
            className={`border-b hover:bg-emerald-50 ${
              isNetMovement ? "cursor-pointer" : ""
            }`}
            onClick={() => isNetMovement && setShowModal(true)}
          >
            <td className="px-6 py-4 font-medium text-gray-700">
              {item.title}
            </td>

            <td className="px-6 py-4 text-emerald-900 font-bold">
              {item.value}
            </td>

            <td className="px-6 py-4 text-emerald-700 text-xs">
              {isNetMovement ? "View details" : "-"}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


</main>
    </div>
  );
};

export default Dashboard;
