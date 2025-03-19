import React, { useState } from "react";
import "../../styles/LessonsPage.css";

const LessonPage = () => {
  // Light/dark theme state (optional)
  const [theme, setTheme] = useState("light");
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  // Hard-coded categories for sign language
  const categories = [
    "FingerSpelling",
    "Basic Communication",
    "Interpreting",
    "Deaf Culture",
    "Deaf Education",
    "ASL Grammar",
    "Medical Interpreting",
    "Business Interpreting",
    "Children's Education",
    "Community Advocacy",
  ];

  // Hard-coded career path data
  const careerPaths = [
    {
      id: 1,
      title: "Sign Language Interpreter",
      snippet: "Master essential sign language skills to bridge communication gaps in various settings.",
      credentials: ["ASL Certification", "BS in Deaf Studies"],
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      jobInfo: { averageSalary: "₹30,000/mo", openings: "12,000+ openings" },
      linkText: "View Interpreter paths",
      linkUrl: "/lesson/interpreter",
    },
    {
      id: 2,
      title: "Deaf Educator",
      snippet: "Help Deaf students excel academically through advanced sign language teaching methods.",
      credentials: ["MA in Deaf Education", "TESOL for ASL"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      jobInfo: { averageSalary: "₹35,000/mo", openings: "8,000+ openings" },
      linkText: "View Educator programs",
      linkUrl: "/lesson/deaf-educator",
    },
    {
      id: 3,
      title: "Speech-Language Pathologist",
      snippet: "Combine speech therapy with sign language to help children and adults communicate effectively.",
      credentials: ["Speech Pathology MS", "ASL Proficiency"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      jobInfo: { averageSalary: "₹40,000/mo", openings: "10,000+ openings" },
      linkText: "Explore SLP roles",
      linkUrl: "/lesson/slp",
    },
    {
      id: 4,
      title: "Community Advocate",
      snippet: "Advocate for accessibility, Deaf culture, and inclusive communication strategies.",
      credentials: ["Deaf Culture Studies", "Nonprofit Experience"],
      imageUrl: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      jobInfo: { averageSalary: "₹28,000/mo", openings: "5,000+ openings" },
      linkText: "Browse Advocacy roles",
      linkUrl: "/lesson/advocate",
    },
  ];

  // Hard-coded recently viewed data
  const recentlyViewed = [
    {
      id: 101,
      title: "FingerSpelling Basics",
      org: "Sign Language 101",
      imageUrl: "https://plus.unsplash.com/premium_photo-1715958891348-455d2b937ff3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 102,
      title: "Medical Interpreting Crash Course",
      org: "HealthComm",
      imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 103,
      title: "ASL Grammar Mastery",
      org: "DeafEd Experts",
      imageUrl: "https://images.unsplash.com/photo-1675654567682-b6f9ea3a785a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 104,
      title: "Deaf Culture & History",
      org: "Community Connect",
      imageUrl: "https://plus.unsplash.com/premium_photo-1720798652741-1cd439c38aad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className={`lesson-page ${theme}`}>
      {/* Header Nav */}
      <header className="lesson-nav">
        <div className="nav-left">
          <h1>Sign Language Platform</h1>
        </div>
        <nav className="nav-right">
          {/* Theme Dropdown (optional) */}
          <select className="theme-dropdown" onChange={handleThemeChange} value={theme}>
            <option value="light">☀ Light Mode</option>
            <option value="dark">🌙 Dark Mode</option>
          </select>
        </nav>
      </header>

      <main className="lesson-main">
        {/* Categories Section */}
        <section className="categories-section">
          <h2>Categories</h2>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div className="category-pill" key={index}>
                {cat}
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="career-paths-section">
          <h2 className="section-title">Because you want to start a career in Sign Language</h2>
          <div className="career-cards">
            {careerPaths.map((path) => (
              <div className="career-card" key={path.id}>
                <img className="career-card-image" src={path.imageUrl} alt={path.title} />
                <h3 className="career-card-title">{path.title}</h3>
                <p className="career-card-snippet">{path.snippet}</p>
                <p className="career-card-credentials">
                  <strong>Credentials:</strong> {path.credentials.join(", ")}
                </p>
                <p className="career-card-jobinfo">
                  <strong>Avg. Salary:</strong> {path.jobInfo.averageSalary} <br />
                  <strong>Openings:</strong> {path.jobInfo.openings}
                </p>
                <a className="career-card-link" href={path.linkUrl}>
                  {path.linkText}
                </a>
              </div>
            ))}
          </div>
          <div className="show-more-roles">
            <a href="/lesson/all">Show &amp; explore all roles →</a>
          </div>
        </section>

        {/* Recently Viewed Section */}
        <section className="recently-viewed-section">
          <h3 className="section-subtitle">Recently Viewed Products</h3>
          <div className="recently-viewed-row">
            {recentlyViewed.map((item) => (
              <div className="recently-viewed-card" key={item.id}>
                <img src={item.imageUrl} alt={item.title} className="rv-card-image" />
                <div className="rv-card-content">
                  <span className="rv-org">{item.org}</span>
                  <h4 className="rv-title">{item.title}</h4>
                </div>
              </div>
            ))}
            <div className="show-more-rv">
              <a href="/lesson/recent">Show more</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LessonPage;
