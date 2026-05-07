import { Link } from "react-router-dom";

const categories = [
  {
    title: "Data Analytics",
    slug: "data-analytics",
    desc: "Dashboards, KPI analysis, and business intelligence projects.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    desc: "Responsive UI, interactive interfaces, and frontend systems.",
  },
  {
    title: "Machine Learning",
    slug: "machine-learning",
    desc: "Classification models, feature engineering, and ML workflows.",
  },
  {
    title: "AI Tools",
    slug: "ai-tools",
    desc: "AI productivity tools and browser-based assistant systems.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <h1 className="text-5xl font-bold mb-6">Sudhanshu Joshi</h1>
      <p className="text-zinc-400 text-lg mb-16">
        Frontend Developer · Data Analyst · AI Enthusiast
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/projects/${category.slug}`}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-600 transition"
          >
            <div className="h-32 rounded-2xl bg-black border border-zinc-800 mb-5" />
            <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
            <p className="text-zinc-500">{category.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}