import React from "react"

type Exp = {
    title: string
    org: string
    period: string
    location?: string
    bullets: string[]
}

const experiences: Exp[] = [
    {
        title: "SWE Team Lead",
        org: "NeuroSpark CS (Internship)",
        period: "June 2025 – Present",
        bullets: [
            "Managing a team of 4-5 developers in building a website for the company.",
            "Finalizing website design and working across multiple coding languages to produce fast, reliable, and functional sites.",
        ],
    },
    {
        title: "Flight Sergeant",
        org: "540 Golden Hawks Squadron",
        period: "Sep 2024 – Jun 2025",
        location: "Oakville, Ontario, Canada",
        bullets: [
            "Teaching level 3 cadets about leadership, aviation and other aspects of the air cadet program.",
            "Creating and managing public posts as part of the Public Affairs team.",
            "Planning fitness nights and leading stations for the squadron’s leadership team.",
            "Participating in fundraising and Nova Quest aerospace certification.",
        ],
    },
    {
        title: "Math and English Tutor",
        org: "Kumon Canada, Inc. · Permanent Part-time",
        period: "Nov 2023 – May 2025",
        bullets: [
            "Tutored students one-on-one in math and English curricula.",
            "Developed individualized study plans to build confidence and mastery.",
        ],
    },
    {
        title: "Summer Camp Lead",
        org: "Code Ninjas",
        period: "Jul 2024 – Aug 2024",
        location: "Mississauga, ON",
        bullets: [
            "Taught 10+ students Lua, JavaScript, and C#, enabling them to build games and projects.",
            "Led sessions on block coding, circuits, and game development.",
            "Managed groups of children across different age levels, improving organizational and leadership skills.",
        ],
    },
    {
        title: "Camp Sensei",
        org: "Code Ninjas · Co-op",
        period: "Jul 2024 – Aug 2024",
        location: "Mississauga, ON",
        bullets: [
            "Junior Summer Camp Sensei of regular classes.",
            "Managed multiple age groups teaching circuits and block coding.",
            "Helped students understand new concepts, achieving high-level skills in coding and circuits.",
        ],
    },
]

export function ExperienceSection() {
    return (
        <section className="py-20 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience Timeline</h2>
            <ol className="relative border-l-2 border-primary ml-4">
                {experiences.map((exp, idx) => (
                    <li key={idx} className="mb-10 ml-6">
                        <span className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 mt-1 border border-white"></span>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <p className="text-muted-foreground">{exp.org}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        {exp.location && (
                            <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                        )}
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            {exp.bullets.map((b, i) => (
                                <li key={i} className="text-sm text-muted-foreground">
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    )
}
