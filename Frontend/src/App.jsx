import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import AdminPage from "./components/AdminPage";
import profileDefaults from "./profileDefaults";

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";

const App = () => {
  const [profile, setProfile] = useState(profileDefaults);
  const isAdminRoute = window.location.pathname === "/admin";

  useEffect(() => {
    if (isAdminRoute) {
      return;
    }

    fetch(`${apiBase}/api/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(profileDefaults));
  }, [isAdminRoute]);

  if (isAdminRoute) {
    return <AdminPage />;
  }

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Education profile={profile} />
      <Skills profile={profile} />
      <Project profile={profile} />
      <Contact />
      <Footer />
      <ScrollToTop smooth color="white" style={{ backgroundColor: "#3BB2F6", display: "flex", alignItems: "center", justifyContent: "center" }} />
    </div>
  );
};

export default App;
