import { Link, useParams } from "react-router-dom";
import { projectCategories } from "../data/projects";

export default function ProjectsPage() {
    const { category } = useParams();
    const currentCategory = projectCategories[category];

    if (!currentCategory) {
        return (
            <div className="min-h-screen bg-black text-white p-10">
                Category not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
            <Link to="/" className="text-zinc-400 hover:text-white transition">
                ← Back to Home
            </Link>

            <h1 className="text-5xl font-bold mt-8 mb-4">{currentCategory.title}</h1>
            <p className="text-zinc-500 mb-12">
                Explore projects in {currentCategory.title}.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {currentCategory.projects.map((project) => (
                    <div
                        key={project.title}
                        className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
                    >
                        <div className="h-40 rounded-2xl bg-black border border-zinc-800 mb-5" />
                        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                        <p className="text-zinc-500 mb-6">{project.desc}</p>

                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-2 rounded-xl border border-zinc-700 text-sm"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}