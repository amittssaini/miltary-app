import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
    // later → call backend, save JWT, redirect
  };

  return (
    <div className="h-screen flex items-center justify-center bg-stone-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-emerald-900 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-emerald-900 text-amber-200 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
