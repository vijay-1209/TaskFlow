import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Manage Projects & Tasks Efficiently
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            TaskFlow helps teams organize projects, track tasks,
            and improve productivity.
          </p>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;