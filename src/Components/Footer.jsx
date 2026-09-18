import { Mail } from "lucide-react";

const Github = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Linkedin = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const LeetCode = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.135 5.31 5.31 0 0 0-.097 2.438 5.334 5.334 0 0 0 1.054 2.215 5.378 5.378 0 0 0 2.146 1.547 5.274 5.274 0 0 0 2.502.261 5.36 5.36 0 0 0 2.378-.813l6.577-4.227a1.378 1.378 0 0 0 .428-1.921 1.37 1.37 0 0 0-1.916-.432l-6.579 4.227a2.6 2.6 0 0 1-1.157.394 2.56 2.56 0 0 1-1.214-.127 2.613 2.613 0 0 1-1.042-.751 2.593 2.593 0 0 1-.512-1.076 2.576 2.576 0 0 1 .047-1.185 2.553 2.553 0 0 1 .587-1.037l3.854-4.126 5.406-5.788A1.37 1.37 0 0 0 13.483 0zm2.71 6.845a1.372 1.372 0 0 0-.974.408l-6.528 6.528a1.374 1.374 0 1 0 1.944 1.944l6.528-6.528a1.374 1.374 0 0 0-.97-2.352zM21.144 12.35a1.372 1.372 0 0 0-.97.402l-2.094 2.094a1.374 1.374 0 1 0 1.944 1.944l2.094-2.094a1.372 1.372 0 0 0-.974-2.346z" />
    </svg>
);

const HackerRank = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.428 17.5h-2.143v-11h2.143v4.286h2.857v-4.286h2.143v11h-2.143v-4.571h-2.857v4.571z" />
    </svg>
);

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Mounika Malga. All rights reserved.
                </p>

                <div className="flex flex-wrap items-center gap-5">

                    <a
                        href="https://github.com/malga-mounika"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-white"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>

                    <a
                        href="https://linkedin.com/in/malga-mounika-ba4046360"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-indigo-400"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>

                    <a
                        href="https://leetcode.com/u/mounika_malga-2/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-indigo-400"
                        aria-label="LeetCode"
                    >
                        <LeetCode size={20} />
                    </a>

                    <a
                        href="https://www.hackerrank.com/profile/mounikamalga9"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-indigo-400"
                        aria-label="HackerRank"
                    >
                        <HackerRank size={20} />
                    </a>

                    <a
                        href="mailto:your-email@example.com"
                        className="text-slate-500 transition hover:text-indigo-400"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;