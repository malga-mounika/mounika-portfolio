import { ExternalLink } from "lucide-react";

function GithubIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.71c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.9c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.65.72 1.04 1.63 1.04 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function ProjectCard({
    number,
    title,
    description,
    tech = [],
    features = [],
    github,
    demo,
}) {
    return (
        <article className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5">

            {/* Number + Links */}
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-indigo-400">
                    {number}
                </span>

                <div className="flex items-center gap-4">

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} GitHub repository`}
                            className="text-slate-400 transition hover:text-white"
                        >
                            <GithubIcon />
                        </a>
                    )}

                    {demo && demo !== "#" && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} live demo`}
                            className="text-slate-400 transition hover:text-indigo-400"
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}

                </div>
            </div>

            {/* Title */}
            <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-indigo-400">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-base leading-7 text-slate-400">
                {description}
            </p>

            {/* Features */}
            {features.length > 0 && (
                <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Key Features
                    </p>

                    <ul className="space-y-2">
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-slate-400"
                            >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                        {item}
                    </span>
                ))}
            </div>

        </article>
    );
}

export default ProjectCard;