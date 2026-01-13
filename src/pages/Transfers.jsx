import { useState } from "react";

const transfersData = [
  {
    date: "2026-01-12",
    fromBase: "Base A",
    toBase: "Base B",
    asset: "Rifle",
    quantity: 20,
  },
  {
    date: "2026-01-13",
    fromBase: "Base B",
    toBase: "Base C",
    asset: "Ammunition",
    quantity: 100,
  },
];

const Transfers = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    fromBase: "",
    toBase: "",
    asset: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Data:", formData);
    setShowModal(false);
    setFormData({
      date: "",
      fromBase: "",
      toBase: "",
      asset: "",
      quantity: "",
    });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-stone-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
        Transfers
      </h1>

      {/* Add Transfer Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-900 text-amber-200 px-4 py-2 rounded-lg"
        >
          + Add Transfer
        </button>
      </div>

      {/* Transfers Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-emerald-900 text-amber-200">
            <tr>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">From Base</th>
              <th className="px-6 py-3 text-left">To Base</th>
              <th className="px-6 py-3 text-left">Asset</th>
              <th className="px-6 py-3 text-left">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {transfersData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-emerald-50">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.fromBase}</td>
                <td className="px-6 py-4">{item.toBase}</td>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4 font-semibold">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transfer Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white w-11/12 max-w-md rounded-2xl p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-emerald-900">
                Add Transfer
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              />

              <select
                name="fromBase"
                value={formData.fromBase}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">From Base</option>
                <option value="Base A">Base A</option>
                <option value="Base B">Base B</option>
              </select>

              <select
                name="toBase"
                value={formData.toBase}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">To Base</option>
                <option value="Base B">Base B</option>
                <option value="Base C">Base C</option>
              </select>

              <select
                name="asset"
                value={formData.asset}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Asset</option>
                <option value="Weapon">Weapon</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Ammunition">Ammunition</option>
              </select>

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-emerald-900 text-amber-200 py-2 rounded-lg"
              >
                Save Transfer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transfers;
