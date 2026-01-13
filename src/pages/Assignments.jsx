import { useState } from "react";

const records = [
  {
    date: "2026-01-14",
    base: "Base A",
    asset: "Rifle",
    quantity: 10,
    type: "Assigned",
    person: "Unit Alpha",
  },
  {
    date: "2026-01-15",
    base: "Base B",
    asset: "Ammunition",
    quantity: 200,
    type: "Expended",
    person: "Training",
  },
];

const Assignments = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    date: "",
    base: "",
    asset: "",
    quantity: "",
    type: "Assigned",
    person: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
    setOpen(false);
  };

  return (
    <div className="p-6 bg-stone-100 min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-900 mb-6">
        Assignments & Expenditures
      </h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-emerald-900 text-amber-200 px-4 py-2 rounded-lg"
        >
          + Add Record
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-emerald-900 text-amber-200">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Base</th>
              <th className="px-6 py-3">Asset</th>
              <th className="px-6 py-3">Qty</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Assigned / Reason</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i} className="border-b hover:bg-emerald-50">
                <td className="px-6 py-3">{r.date}</td>
                <td className="px-6 py-3">{r.base}</td>
                <td className="px-6 py-3">{r.asset}</td>
                <td className="px-6 py-3 font-semibold">{r.quantity}</td>
                <td className="px-6 py-3">{r.type}</td>
                <td className="px-6 py-3">{r.person}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Record</h2>
            <form onSubmit={submit} className="space-y-3">
              <input type="date" name="date" onChange={handleChange} required className="w-full border p-2 rounded" />
              <input name="base" placeholder="Base" onChange={handleChange} required className="w-full border p-2 rounded" />
              <input name="asset" placeholder="Asset" onChange={handleChange} required className="w-full border p-2 rounded" />
              <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required className="w-full border p-2 rounded" />
              <select name="type" onChange={handleChange} className="w-full border p-2 rounded">
                <option>Assigned</option>
                <option>Expended</option>
              </select>
              <input name="person" placeholder="Assigned to / Reason" onChange={handleChange} required className="w-full border p-2 rounded" />
              <button className="w-full bg-emerald-900 text-amber-200 py-2 rounded">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
