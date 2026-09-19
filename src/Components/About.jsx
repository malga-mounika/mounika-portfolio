function About() {
    return (
        <section
            id="about"
            className="border-t border-slate-800 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        About Me
                    </h2>
                </div>

                {/* About Content */}
                <div className="grid gap-10 md:grid-cols-2">

                    {/* Introduction */}
                    <div>
                        <p className="text-lg leading-8 text-slate-400">
                            I'm{" "}
                            <strong className="font-semibold text-white">
                                Malga Mounika
                            </strong>
                            , a{" "}
                            <strong className="font-semibold text-white">
                                final-year Computer Science Engineering student
                            </strong>{" "}
                            passionate about{" "}
                            <strong className="font-semibold text-indigo-400">
                                Generative AI
                            </strong>{" "}
                            and{" "}
                            <strong className="font-semibold text-indigo-400">
                                Full Stack Development
                            </strong>
                            . I enjoy building{" "}
                            <strong className="font-semibold text-white">
                                practical applications
                            </strong>{" "}
                            that combine intelligent systems with{" "}
                            <strong className="font-semibold text-white">
                                modern web technologies
                            </strong>{" "}
                            and turn ideas into practical software solutions.
                        </p>
                    </div>

                    {/* Quick Information */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">

                        <h3 className="text-2xl font-semibold text-white">
                            Quick Information
                        </h3>

                        <div className="mt-7 space-y-7">

                            {/* Education */}
                            <div>
                                <p className="text-base text-slate-500">
                                    Education
                                </p>

                                <p className="mt-2 text-lg font-semibold text-slate-200">
                                    B.Tech — Computer Science Engineering
                                </p>
                            </div>

                            {/* College */}
                            <div>
                                <p className="text-base text-slate-500">
                                    College
                                </p>

                                <p className="mt-2 text-lg font-semibold text-slate-200">
                                    Sphoorthy Engineering College
                                </p>
                            </div>

                            {/* Graduation */}
                            <div>
                                <p className="text-base text-slate-500">
                                    Graduation
                                </p>

                                <p className="mt-2 text-lg font-semibold text-slate-200">
                                    2027
                                </p>
                            </div>

                            {/* CGPA */}
                            <div>
                                <p className="text-base text-slate-500">
                                    CGPA
                                </p>

                                <p className="mt-2 text-xl font-bold text-indigo-400">
                                    9.21 / 10
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;