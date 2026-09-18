function SkillCard({
    title,
    icon,
    iconStyle,
    skills = [],
}) {
    return (
        <div
            className="
                rounded-2xl
                border border-slate-800
                bg-slate-950
                px-5 py-4
                transition duration-300
                hover:-translate-y-1
                hover:border-indigo-500/50
                hover:shadow-lg
                hover:shadow-indigo-500/10
            "
        >

            {/* Header */}
            <div className="flex items-center gap-3">

                {/* Category Icon */}
                <div
                    className={`
                        flex h-11 w-11
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        ${iconStyle}
                        text-xs font-bold
                        text-white
                    `}
                >
                    {icon}
                </div>

                {/* Title */}
                <div>
                    <h3 className="text-base font-semibold text-white">
                        {title}
                    </h3>

                    <p className="text-xs text-slate-500">
                        Technologies I work with
                    </p>
                </div>

            </div>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">

                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="
                            group
                            flex items-center gap-2
                            rounded-lg
                            border border-slate-800
                            bg-slate-900
                            px-2.5 py-1.5
                            transition
                            hover:border-indigo-500/50
                            hover:bg-slate-800
                        "
                    >

                        {/* Technology Icon */}
                        <div className="flex h-6 w-6 items-center justify-center">

                            {skill.icon ? (
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="
                                        h-5 w-5
                                        object-contain
                                        transition
                                        group-hover:scale-110
                                    "
                                />
                            ) : (
                                <span
                                    className={`
                                        flex h-6 w-6
                                        items-center justify-center
                                        rounded-md
                                        ${skill.color}
                                        text-[8px]
                                        font-bold
                                        text-white
                                    `}
                                >
                                    {skill.textIcon}
                                </span>
                            )}

                        </div>

                        {/* Name */}
                        <span
                            className="
                                whitespace-nowrap
                                text-xs
                                font-medium
                                text-slate-300
                                group-hover:text-white
                            "
                        >
                            {skill.name}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default SkillCard;