import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-6">
          Profile
        </h1>

        <div className="bg-white p-6 rounded-xl shadow max-w-xl">
          <p>
            <strong>Name:</strong>{" "}
            {user?.name || "Demo User"}
          </p>

          <p className="mt-3">
            <strong>Email:</strong>{" "}
            {user?.email || "demo@gmail.com"}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;