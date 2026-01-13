import { useState } from "react";

const purchases = [
  {
    date: "2026-01-10",
    base: "Base A",
    asset: "Rifle",
    quantity: 50,
  },
  {
    date: "2026-01-11",
    base: "Base B",
    asset: "Ammunition",
    quantity: 200,
  },
];

const Purchases = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    base: "",
    asset: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Purchase Data:", formData);
    setShowModal(false);
    setFormData({ date: "", base: "", asset: "", quantity: "" });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-stone-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
        Purchases
      </h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input type="date" className="border rounded-lg px-3 py-2" />

        <select className="border rounded-lg px-3 py-2">
          <option>All Bases</option>
          <option>Base A</option>
          <option>Base B</option>
        </select>

        <select className="border rounded-lg px-3 py-2">
          <option>All Assets</option>
          <option>Weapon</option>
          <option>Vehicle</option>
          <option>Ammunition</option>
        </select>
      </div>

      {/* Add Purchase Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-900 text-amber-200 px-4 py-2 rounded-lg"
        >
          + Add Purchase
        </button>
      </div>

      {/* Purchases Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-emerald-900 text-amber-200">
            <tr>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Base</th>
              <th className="text-left px-6 py-3">Asset</th>
              <th className="text-left px-6 py-3">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((item, index) => (
              <tr key={index} className="border-b hover:bg-emerald-50">
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.base}</td>
                <td className="px-6 py-4">{item.asset}</td>
                <td className="px-6 py-4 font-semibold">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Purchase Modal */}
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
                Add Purchase
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
                name="base"
                value={formData.base}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Base</option>
                <option value="Base A">Base A</option>
                <option value="Base B">Base B</option>
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
                Save Purchase
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchases;
