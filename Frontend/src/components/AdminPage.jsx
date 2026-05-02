import { useEffect, useState } from "react";
import profileDefaults from "../profileDefaults";

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminPage = () => {
  const [rawJson, setRawJson] = useState(JSON.stringify(profileDefaults, null, 2));
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${apiBase}/api/profile`)
      .then((res) => res.json())
      .then((data) => setRawJson(JSON.stringify(data, null, 2)))
      .catch(() => setStatus("Using local defaults. Backend unavailable."));
  }, []);

  const saveProfile = async () => {
    try {
      const payload = JSON.parse(rawJson);
      const response = await fetch(`${apiBase}/api/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      setStatus("Profile data updated successfully.");
    } catch {
      setStatus("Invalid JSON or backend error.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-gray-200 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>
        <p className="text-gray-400 mb-4">Update your profile data as JSON and save.</p>
        <textarea
          value={rawJson}
          onChange={(e) => setRawJson(e.target.value)}
          className="w-full h-[420px] bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm"
        />
        <div className="mt-4 flex gap-4">
          <button onClick={saveProfile} className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500">Save</button>
          <a href="/" className="px-4 py-2 bg-gray-700 rounded-md">Back to Site</a>
        </div>
        {status && <p className="mt-4 text-sm text-blue-400">{status}</p>}
      </div>
    </section>
  );
};

export default AdminPage;
