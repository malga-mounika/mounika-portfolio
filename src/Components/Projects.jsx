import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section
            id="projects"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
                        Featured Projects
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Things I've built.
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                        A selection of projects where I applied software engineering,
                        Generative AI, machine learning, databases, and modern web
                        technologies to solve practical problems.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <ProjectCard
                        number="01"
                        title="AI RAG Chatbot"
                        description="An AI-powered document question-answering application that retrieves relevant information from uploaded documents before generating context-aware responses."
                        tech={[
                            "Python",
                            "FastAPI",
                            "LangChain",
                            "ChromaDB",
                            "React",
                        ]}
                        github="https://github.com/malga-mounika"
                        demo="#"
                    />

                    <ProjectCard
                        number="02"
                        title="Water Quality Monitoring System"
                        description="A portable GPS-enabled IoT telemetry platform for monitoring water quality, calculating Water Quality Index, detecting contamination levels, and generating treatment recommendations."
                        tech={[
                            "ESP32",
                            "Python",
                            "FastAPI",
                            "React",
                            "PostgreSQL",
                            "Machine Learning",
                        ]}
                        github="https://github.com/malga-mounika"
                        demo="#"
                    />

                    <ProjectCard
                        number="03"
                        title="BloodConnect"
                        description="A blood donation platform designed to connect donors, hospitals, and recipients using blood-group and geographic matching with notification support."
                        tech={[
                            "React",
                            "Express.js",
                            "Node.js",
                            "PostgreSQL",
                        ]}
                        github="https://github.com/malga-mounika"
                        demo="#"
                    />

                    <ProjectCard
                        number="04"
                        title="Local Marketplace"
                        description="A role-based marketplace application that allows users to list products, communicate through real-time chat, and manage marketplace interactions."
                        tech={[
                            "Flutter",
                            "Firebase",
                            "Firestore",
                            "Real-time Chat",
                        ]}
                        github="https://github.com/malga-mounika"
                        demo="#"
                    />

                </div>
            </div>
        </section>
    );
}

export default Projects;