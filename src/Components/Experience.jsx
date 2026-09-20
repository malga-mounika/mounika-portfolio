import ExperienceCard from "./ExperienceCard";

function Experience() {
    return (
        <section
            id="experience"
            className="bg-slate-900/40 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
                        Experience
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Where I've worked.
                    </h2>

                </div>

                <div className="space-y-12">

                    <ExperienceCard
                        role="Full Stack Developer Intern"
                        company="Hooman Group"
                        period="Aug 2025 – Apr 2026"
                        points={[
                            "Developed features for a pet-store e-commerce platform using Node.js, Express.js, TypeScript, PostgreSQL and React/Next.js.",
                            "Built REST APIs for authentication, products, collections, orders and gift cards.",
                            "Implemented real-time communication  across web and mobile applications.",
                            "Built and integrated RESTful APIs for authentication, product management, and core workflows.",
                        ]}
                    />

                    <ExperienceCard
                        role="Web / Frontend Developer"
                        company="Skill Craft Technology"
                        period="May 2025 – Jun 2025"
                        points={[
                            "Developed reusable React components and worked on frontend functionality.",
                            "Debugged UI issues and improved cross-browser compatibility.",
                        ]}
                    />

                </div>
            </div>
        </section>
    );
}

export default Experience;