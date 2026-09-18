import { motion } from "framer-motion";

function ExperienceCard({
    role,
    company,
    period,
    points,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative border-l border-indigo-500/40 pl-8"
        >

            <div className="absolute -left-2.5 top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-indigo-500" />

            <div className="flex flex-col justify-between gap-2 sm:flex-row">

                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        {role}
                    </h3>

                    <p className="mt-1 text-lg text-indigo-400">
                        {company}
                    </p>
                </div>

                <p className="text-sm text-slate-500">
                    {period}
                </p>

            </div>

            <ul className="mt-6 space-y-3">

                {points.map((point) => (
                    <li
                        key={point}
                        className="flex gap-3 leading-7 text-slate-400"
                    >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        <span>{point}</span>
                    </li>
                ))}

            </ul>

        </motion.div>
    );
}

export default ExperienceCard;