function About() {
    return (
        <section
            id="about"
            className="border-t border-slate-800 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
                        About Me
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                        Building with purpose.
                    </h2>
                </div>

                <div className="grid gap-10 md:grid-cols-2">

                    <div>
                        <p className="text-lg leading-8 text-slate-400">
                            I'm a Computer Science Engineering student passionate about
                            Generative AI and Full Stack Development.
                            I enjoy building practical applications that combine
                            intelligent systems with modern web technologies.
                            Passionate about turning ideas into practical software solutions.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                        </p>
                    </div>

                    {/* Quick Information */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">

                        <h3 className="text-xl font-semibold text-white">
                            Quick Information
                        </h3>

                        <div className="mt-6 space-y-5">

                            <div>
                                <p className="text-sm text-slate-500">
                                    Education
                                </p>
                                <p className="mt-1 text-slate-300">
                                    B.Tech — Computer Science Engineering
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    College
                                </p>
                                <p className="mt-1 text-slate-300">
                                    Sphoorthy Engineering College
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Graduation
                                </p>
                                <p className="mt-1 text-slate-300">
                                    2027
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    CGPA
                                </p>
                                <p className="mt-1 font-semibold text-indigo-400">
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