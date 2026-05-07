import { useState } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Data Analytics");

  const skillGroups = {
    Languages: ["Python", "SQL", "JavaScript"],
    Analytics: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"],
    Web: ["HTML", "CSS", "JavaScript", "React"],
    "Machine Learning": [
      "Scikit-learn",
      "Classification",
      "Feature Engineering",
      "Model Evaluation",
    ],
    Tools: ["Git", "GitHub", "VS Code", "MySQL", "Jupyter"],
  };

  const projects = {
    "Data Analytics": [
      {
        title: "Customer Churn Analysis Dashboard",
        desc: "Analyzed churn behavior to identify retention risks and key customer drop-off patterns.",
        image: "/images/projects/churn.jpg",
        github: "https://github.com/Sudhanshu-hash/churn_analysis",
        demo: "https://github.com/Sudhanshu-hash/churn_analysis/blob/main/dashboard.png",
      },
      {
        title: "Amazon Sales Data Analysis",
        desc: "Performed sales trend analysis to uncover product, revenue, and customer insights.",
        image: "/images/projects/amazon-sales.jpg",
        github: "https://github.com/Sudhanshu-hash/Amazon-Sales-Data-Analysis-Visualization",
        demo: "https://github.com/Sudhanshu-hash/Amazon-Sales-Data-Analysis-Visualization/tree/main/sales_dashboard",
      },
      {
        title: "5-Year Stock Performance & Risk Analysis",
        desc: "Conducted stock performance and volatility analysis using Python.",
        image: "/images/projects/stock-analysis.jpg",
        github: "https://github.com/Sudhanshu-hash/5-Year-Equity-Performance-and-Risk-Analysis",
        demo: "https://github.com/Sudhanshu-hash/5-Year-Equity-Performance-and-Risk-Analysis/tree/main/stock_analysis_dashboard",
      },
    ],
    "Web Development": [
      {
        title: "Delhi Mart E-Commerce Platform",
        desc: "Designed a modern e-commerce storefront with responsive UI.",
        image: "/images/projects/delhi-mart.jpg",
        github: "https://github.com/Sudhanshu-hash/Delhi-Mart",
        demo: "https://sudhanshu-hash.github.io/Delhi-Mart/",
      },
    ],
    "Machine Learning": [
      {
        title: "Fraud Detection using Machine Learning",
        desc: "Built an ML pipeline to detect suspicious transactions.",
        image: "/images/projects/fraud-detection.jpg",
        github: "https://github.com/Sudhanshu-hash/Fraud-Detection-using-Machine-Learning",
        demo: "https://github.com/Sudhanshu-hash/Fraud-Detection-using-Machine-Learning",
      },
    ],
    "AI Tools": [
      {
        title: "AI Typing Assistant",
        desc: "Built an AI-powered Chrome extension for writing assistance.",
        image: "/images/projects/ai-typing.jpg",
        github: "https://github.com/Sudhanshu-hash/AI-Typing-Assistant",
        demo: "https://github.com/Sudhanshu-hash/AI-Typing-Assistant/tree/main/testing_screenshot",
      },
    ],
  };

  const categories = [
    {
      title: "Data Analytics",
      desc: "Dashboards, KPI analysis, and business intelligence projects.",
    },
    {
      title: "Web Development",
      desc: "Responsive UI, interactive interfaces, and frontend systems.",
    },
    {
      title: "Machine Learning",
      desc: "Classification models, feature engineering, and ML workflows.",
    },
    {
      title: "AI Tools",
      desc: "AI productivity tools and browser-based assistant systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          <h1 className="text-base md:text-lg font-semibold tracking-wide">
            Sudhanshu
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition duration-300">About</a>
            <a href="#overview" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition duration-300">Overview</a>
            <a href="#work" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition duration-300">Contact</a>
          </div>

          <div className="relative hidden md:block group">
            <button className="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium hover:scale-105 transition">
              Resume
            </button>

            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl">
              <a href="/resume/data-analytics.pdf" target="_blank" rel="noreferrer" className="block px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition">
                Data Analytics Resume
              </a>
              <a href="/resume/web-development.pdf" target="_blank" rel="noreferrer" className="block px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition">
                Web Development Resume
              </a>
              <a href="/resume/machine-learning.pdf" target="_blank" rel="noreferrer" className="block px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition">
                Machine Learning Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="animate-fadeIn min-h-[82vh] grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 pt-28 md:pt-20 pb-10 relative overflow-hidden gap-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="relative z-10 max-w-2xl order-2 md:order-1">
          <p className="text-zinc-400 text-base mb-3">Hello, I’m</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Sudhanshu Joshi
          </h1>
          <h2 className="text-lg md:text-3xl mt-4 text-zinc-300 font-medium leading-relaxed">
            Frontend Developer · Data Analyst · AI Enthusiast
          </h2>
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-3 whitespace-nowrap animate-[scroll_18s_linear_infinite]">

              {[
                "Python",
                "Power BI",
                "SQL",
                "Data Analytics",
                "AI Tools",
                "GitHub",
                "Frontend Development",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-zinc-800 bg-zinc-950/70 backdrop-blur-xl text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}

            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center order-1 md:order-2 mb-10 md:mb-0">
          <div className="relative w-[230px] h-[300px] md:w-[320px] md:h-[390px] rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl overflow-hidden shadow-2xl">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

            {/* Animated Glow Effects */}
            <div className="absolute -top-20 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

            {/* Profile Image */}
            <div className="relative z-10 flex justify-center pt-8">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border border-zinc-700 shadow-xl">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Info Section */}
            <div className="relative z-10 px-6 pt-6">
              <h3 className="text-xl font-semibold text-center mb-2">
                Sudhanshu Joshi
              </h3>

              <p className="text-sm text-zinc-400 text-center leading-relaxed mb-6">
                Building scalable web experiences, data-driven insights, and AI-powered applications.
              </p>

              {/* Skill Chips */}
              <div className="flex flex-wrap justify-center gap-2">

                <span className="px-3 py-1 rounded-full bg-black border border-zinc-800 text-xs text-zinc-300 hover:border-purple-500 transition">
                  Python
                </span>

                <span className="px-3 py-1 rounded-full bg-black border border-zinc-800 text-xs text-zinc-300 hover:border-blue-500 transition">
                  Power BI
                </span>

                <span className="px-3 py-1 rounded-full bg-black border border-zinc-800 text-xs text-zinc-300 hover:border-purple-500 transition">
                  AI
                </span>
              </div>
            </div>
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-blue-400 animate-ping" />
          </div>
        </div>
      </section>

      <section id="overview" className="animate-fadeIn px-6 md:px-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div
            id="about"
            className="relative rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl p-8 overflow-hidden"
          >
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-10 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-black text-zinc-400 text-xs mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                ABOUT ME
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Building modern digital experiences through
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}data, AI, and scalable interfaces.
                </span>
              </h3>

              {/* Main Description */}
              <p className="text-zinc-400 text-[15px] leading-8 mb-8 max-w-2xl">
                I’m a BCA student focused on Frontend Development, Data Analytics, Machine Learning, and AI-powered systems. I enjoy transforming raw ideas into polished products and turning complex datasets into meaningful insights through interactive dashboards and intelligent applications.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4 hover:border-blue-500/40 transition">
                  <h4 className="text-2xl font-bold text-white mb-1">6+</h4>
                  <p className="text-xs text-zinc-500">Projects Built</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4 hover:border-purple-500/40 transition">
                  <h4 className="text-2xl font-bold text-white mb-1">4</h4>
                  <p className="text-xs text-zinc-500">Core Domains</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4 hover:border-blue-500/40 transition">
                  <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                  <p className="text-xs text-zinc-500">Technologies</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/50 p-4 hover:border-purple-500/40 transition">
                  <h4 className="text-2xl font-bold text-white mb-1">AI</h4>
                  <p className="text-xs text-zinc-500">Focused Learning</p>
                </div>

              </div>
            </div>
          </div>
          <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl p-8 overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-black text-zinc-400 text-xs mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                SKILLS & TOOLS
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Technologies and tools I use to build
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}modern digital products.
                </span>
              </h3>

              {/* Skills */}
              <div className="space-y-6">

                {Object.entries(skillGroups).map(([group, items]) => (
                  <div
                    key={group}
                    className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-4 items-start"
                  >
                    <h4 className="text-zinc-400 text-sm font-medium pt-1">
                      {group}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-zinc-300 hover:border-purple-500/40 hover:-translate-y-0.5 transition duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4 text-center">
                  <h4 className="text-xl font-bold mb-1">Frontend</h4>
                  <p className="text-xs text-zinc-500">React · UI/UX</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4 text-center">
                  <h4 className="text-xl font-bold mb-1">Analytics</h4>
                  <p className="text-xs text-zinc-500">Power BI · SQL</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-4 text-center">
                  <h4 className="text-xl font-bold mb-1">AI/ML</h4>
                  <p className="text-xs text-zinc-500">Scikit-learn · AI</p>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div id="work" className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl p-8 overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-black text-zinc-400 text-xs mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                PROJECT CATEGORIES
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Explore projects across
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}multiple technical domains.
                </span>
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-[15px] leading-7 mb-8">
                Browse through projects focused on analytics, machine learning, modern frontend development, and AI-powered systems.
              </p>

              {/* Categories Grid */}
              <div className="grid grid-cols-2 gap-5">

                {categories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`group relative overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] ${selectedCategory === category.title
                      ? "border-white bg-white text-black shadow-2xl"
                      : "border-zinc-800 bg-black/60 hover:border-zinc-600"
                      }`}
                  >

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={`/images/categories/${category.title
                          .toLowerCase()
                          .replace(/\s/g, "-")}.jpg`}
                        alt={category.title}
                        className="h-28 w-full object-cover object-center brightness-90 contrast-110 transition duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <h4 className="text-sm md:text-base font-semibold mb-2">
                      {category.title}
                    </h4>

                    <p
                      className={`text-[11px] leading-relaxed ${selectedCategory === category.title
                        ? "text-zinc-700"
                        : "text-zinc-500"
                        }`}
                    >
                      {category.desc}
                    </p>

                    {/* Active Indicator */}
                    {selectedCategory === category.title && (
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-black animate-pulse" />
                    )}

                  </button>
                ))}

              </div>

            </div>
          </div>

          <div className="relative rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl p-8 overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-black text-zinc-400 text-xs mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                FEATURED PROJECTS
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {selectedCategory}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-3 max-w-lg leading-7">
                    Selected projects showcasing practical implementation, scalable architecture, analytics workflows, and modern UI systems.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-black text-zinc-400 text-xs h-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

                  {projects[selectedCategory].length} Project
                  {projects[selectedCategory].length > 1 ? "s" : ""}
                </div>

              </div>

              {/* Projects */}
              <div className="grid gap-6">

                {projects[selectedCategory].map((project) => (
                  <div
                    key={project.title}
                    className="group rounded-3xl border border-zinc-800 bg-black/50 overflow-hidden hover:border-zinc-600 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                  >

                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-44 md:h-52 w-full object-cover object-top brightness-90 contrast-110 transition duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-xs text-zinc-300">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">

                      <h4 className="text-xl font-semibold mb-3 group-hover:text-white transition">
                        {project.title}
                      </h4>

                      <p className="text-sm text-zinc-500 leading-7 mb-6">
                        {project.desc}
                      </p>

                      {/* Buttons */}
                      <div className="flex gap-3">

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-2xl bg-white text-black text-sm font-medium hover:scale-105 transition duration-300"
                        >
                          GitHub
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-2xl border border-zinc-700 text-sm text-zinc-300 hover:border-white hover:text-white transition duration-300"
                        >
                          Live Preview
                        </a>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div >
      </section >
      <section
        id="contact"
        className="animate-fadeIn relative px-6 md:px-20 py-24 border-t border-zinc-900 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let’s Build <br />
              Something Meaningful
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
              Currently open to internships, freelance collaborations, and entry-level opportunities in Frontend Development, Data Analytics, Machine Learning, and AI-powered systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-sm text-zinc-300">
                Frontend Development
              </span>

              <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-sm text-zinc-300">
                Data Analytics
              </span>

              <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-sm text-zinc-300">
                Machine Learning
              </span>

              <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-sm text-zinc-300">
                AI Tools
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Email */}
            <a
              href="mailto:sudhanshujoshi6009@gmail.com"
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-5 md:p-6 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-5">
                ✉
              </div>

              <h4 className="text-lg font-semibold mb-2 group-hover:text-white">
                Email
              </h4>

              <p className="text-sm text-zinc-500 break-all">
                sudhanshujoshi6009@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sudhanshu-hash"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-5 md:p-6 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl mb-5">
                ⌘
              </div>

              <h4 className="text-lg font-semibold mb-2 group-hover:text-white">
                GitHub
              </h4>

              <p className="text-sm text-zinc-500">
                github.com/Sudhanshu-hash
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sudhanshu-joshi15"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-5 md:p-6 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-5">
                in
              </div>

              <h4 className="text-lg font-semibold mb-2 group-hover:text-white">
                LinkedIn
              </h4>

              <p className="text-sm text-zinc-500">
                linkedin.com/in/sudhanshu-joshi15
              </p>
            </a>

            {/* Location */}
            <div className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-5 md:p-6 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-zinc-300 text-xl mb-5">
                ⌖
              </div>

              <h4 className="text-lg font-semibold mb-2 group-hover:text-white">
                Location
              </h4>

              <p className="text-sm text-zinc-500">
                New Delhi, India
              </p>
            </div>

          </div>
        </div>
      </section>

    </div >
  );
}