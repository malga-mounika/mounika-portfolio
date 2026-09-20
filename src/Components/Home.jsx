import {
    ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

// ===============================
// Home Component
// ===============================
function Home() {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-slate-800 pt-20"
        >

            <div
                className="
                    mx-auto
                    grid
                    min-h-[calc(100vh-80px)]
                    max-w-6xl
                    items-center
                    gap-12
                    px-6
                    py-20
                    md:grid-cols-2
                "
            >

                {/* =================================
                    LEFT — INTRODUCTION
                ================================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    {/* Small Heading */}
                    <p
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-indigo-400
                        "
                    >
                        Computer Science Engineering Student
                    </p>


                    {/* Main Heading */}
                    <h1
                        className="
                            mt-4
                            text-5xl
                            font-bold
                            leading-tight
                            sm:text-6xl
                        "
                    >
                        Hi, I'm{" "}
                        <span className="text-indigo-400">
                            Mounika.
                        </span>
                    </h1>


                    {/* Role */}
                    <h2
                        className="
                            mt-4
                            text-2xl
                            font-semibold
                            text-slate-300
                            sm:text-3xl
                        "
                    >
                        AI & Full Stack Developer
                    </h2>


                    {/* Description */}
                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-lg
                            leading-8
                            text-slate-400
                        "
                    >
                        I build intelligent and scalable applications using
                        Generative AI, RAG, Python, React, FastAPI and modern
                        backend technologies.
                    </p>


                    {/* =================================
                        BUTTONS
                    ================================= */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        {/* View My Work */}
                        <a
                            href="#projects"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-indigo-500
                                px-6
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-indigo-400
                            "
                        >
                            View My Work

                            <ArrowUpRight size={18} />
                        </a>


                        {/* Contact */}
                        <a
                            href="#contact"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-700
                                px-6
                                py-3
                                font-semibold
                                text-slate-200
                                transition
                                hover:border-indigo-500
                                hover:text-indigo-400
                            "
                        >
                            Contact

                            <ArrowUpRight size={18} />
                        </a>

                    </div>

                </motion.div>


                {/* =================================
                    RIGHT — PROFILE PHOTO
                ================================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end"
                >

                    <div className="relative">

                        {/* Glow Behind Photo */}
                        <div
                            className="
                                absolute
                                -inset-5
                                rounded-3xl
                                bg-indigo-500/20
                                blur-3xl
                            "
                        />


                        {/* Profile Photo */}
                        <div
                            className="
                                relative
                                h-[420px]
                                w-[320px]
                                overflow-hidden
                                rounded-3xl
                                border-2
                                border-indigo-500/40
                                bg-slate-900
                                shadow-2xl
                                shadow-indigo-500/20

                                sm:h-[480px]
                                sm:w-[350px]

                                md:h-[520px]
                                md:w-[370px]
                            "
                        >

                            <img
                                src="/MalgaMounika.jpg"
                                alt="Mounika Malga"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    object-[center_25%]
                                "
                            />

                        </div>


                        {/* Top Right Decorative Border */}
                        <div
                            className="
                                absolute
                                -right-4
                                -top-4
                                h-20
                                w-20
                                rounded-2xl
                                border-2
                                border-indigo-400/30
                            "
                        />


                        {/* Bottom Left Decorative Border */}
                        <div
                            className="
                                absolute
                                -bottom-4
                                -left-4
                                h-24
                                w-24
                                rounded-2xl
                                border-2
                                border-indigo-400/20
                            "
                        />

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Home;