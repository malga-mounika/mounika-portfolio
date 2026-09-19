import SkillCard from "./SkillCard";

function Skills() {
    return (
        <section
            id="skills"
            className="bg-slate-900/40 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        What I've Worked With {" "}
                        <span className="text-indigo-400"> </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                        Technologies and tools I've worked with across AI,
                        full stack development, backend systems, databases,
                        and modern web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Programming Languages */}
                    <SkillCard
                        title="Programming Languages"
                        icon="</>"
                        iconStyle="bg-emerald-500"
                        skills={[
                            {
                                name: "Python",
                                icon: "https://cdn.simpleicons.org/python/3776AB",
                            },
                            {
                                name: "JavaScript",
                                icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
                            },
                        ]}
                    />

                    {/* AI / Generative AI */}
                    <SkillCard
                        title="AI / Generative AI"
                        icon="AI"
                        iconStyle="bg-pink-500"
                        skills={[
                            {
                                name: "LLMs",
                                textIcon: "AI",
                                color: "bg-purple-500",
                            },
                            {
                                name: "RAG",
                                textIcon: "R",
                                color: "bg-indigo-500",
                            },
                            {
                                name: "LangChain",
                                textIcon: "LC",
                                color: "bg-green-500",
                            },
                            {
                                name: "ChromaDB",
                                textIcon: "C",
                                color: "bg-blue-500",
                            },
                            {
                                name: "Embeddings",
                                textIcon: "E",
                                color: "bg-cyan-500",
                            },
                            {
                                name: "AI APIs",
                                textIcon: "API",
                                color: "bg-violet-500",
                            },
                        ]}
                    />

                    {/* Backend */}
                    <SkillCard
                        title="Backend"
                        icon="API"
                        iconStyle="bg-orange-500"
                        skills={[
                            {
                                name: "FastAPI",
                                icon: "https://cdn.simpleicons.org/fastapi/009688",
                            },
                            {
                                name: "Node.js",
                                icon: "https://cdn.simpleicons.org/nodedotjs/339933",
                            },
                            {
                                name: "Express.js",
                                textIcon: "EX",
                                color: "bg-slate-700",
                            },
                            {
                                name: "REST APIs",
                                textIcon: "API",
                                color: "bg-blue-500",
                            },
                        ]}
                    />

                    {/* Frontend */}
                    <SkillCard
                        title="Frontend"
                        icon="WEB"
                        iconStyle="bg-indigo-500"
                        skills={[
                            {
                                name: "React",
                                icon: "https://cdn.simpleicons.org/react/61DAFB",
                            },
                            {
                                name: "Next.js",
                                icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
                            },
                            {
                                name: "Tailwind CSS",
                                icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
                            },
                            {
                                name: "HTML",
                                icon: "https://cdn.simpleicons.org/html5/E34F26",
                            },
                            {
                                name: "CSS",
                                icon: "https://cdn.simpleicons.org/css/1572B6",
                            },
                        ]}
                    />

                    {/* Database */}
                    <SkillCard
                        title="Database"
                        icon="DB"
                        iconStyle="bg-blue-500"
                        skills={[
                            {
                                name: "PostgreSQL",
                                icon: "https://cdn.simpleicons.org/postgresql/4169E1",
                            },
                            {
                                name: "NeonDB",
                                textIcon: "N",
                                color: "bg-gradient-to-br from-green-400 to-blue-500",
                            },
                            {
                                name: "SQL",
                                textIcon: "SQL",
                                color: "bg-blue-600",
                            },
                        ]}
                    />

                    {/* Tools & Platforms */}
                    <SkillCard
                        title="Tools & Platforms"
                        icon="DEV"
                        iconStyle="bg-cyan-500"
                        skills={[
                            {
                                name: "Git",
                                icon: "https://cdn.simpleicons.org/git/F05032",
                            },
                            {
                                name: "GitHub",
                                icon: "https://cdn.simpleicons.org/github/FFFFFF",
                            },
                        ]}
                    />

                </div>
            </div>
        </section>
    );
}

export default Skills;