import ProjectCard from "./ProjectCard";
import ContactOption from "./ContactOption";
import Navbar from "./Navbar";

function Portfolio() {
    const skills = [
        "C#/.NET",
        ".NET MAUI (Android/iOS)",
        "SOAP/REST APIs",
        "JavaScript/TypeScript",
        "React",
        "HTML/CSS",
        "Bootstrap/Tailwind CSS",
        "Python",
        "Flask",
        "Linux/Ubuntu",
        "AI/LLMs",
        "SQL",
        "Git",
    ];

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-4 bg-white dark:bg-gray-900">
                {/* About Section */}
                <section id="about" className="py-10 flex flex-col items-center text-center bg-white dark:bg-gray-900">
                    <img
                        src="/images/headshot.jpg"
                        alt="Cody Chaplin"
                        className="w-96 h-96 rounded-full object-cover mb-6 border-4 border-blue-200 dark:border-blue-400"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-blue-100">Cody Chaplin</h1>
                    <p className="text-xl md:text-2xl mb-6 text-gray-800 dark:text-blue-200">Software Developer</p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-blue-200">
                        Hi, I'm Cody Chaplin, a <strong>full-stack developer</strong> from Ontario, Canada. I have two diplomas in Computer Systems/Networking and Computer
                        Programming, respectively. I love working with <strong>C#</strong> and <strong>JavaScript</strong> making <strong>Mobile</strong> and <strong>Web</strong>{" "}
                        applications. I am currently a full-stack developer at a small company in the medical industry, where I maintain a cross-platform <strong>.NET MAUI</strong>{" "}
                        mobile app and an <strong>AI/data analytics</strong> server.
                    </p>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-10 flex flex-col items-center text-center bg-white dark:bg-gray-900">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-blue-100">Skills</h2>
                    <ul className="flex flex-wrap justify-center gap-4 mb-6">
                        {skills.map((skill) => (
                            <li key={skill} className="bg-blue-100 dark:bg-slate-800 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-10 flex flex-col items-center text-left bg-white dark:bg-gray-900">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-blue-100">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <ProjectCard
                            title="MoMoney"
                            description="MoMoney is a finance tracker that I developed for my personal use. It was made using .NET MAUI and uses an SQLite database to store transactions, accounts, categories, stocks, and db logs. It can show you trends in your data, visualizations, account balances, and real-time stock prices via webscraping."
                            image="/images/momoney.jpg"
                            github="https://github.com/codychaplin/MoMoney"
                        />
                        <ProjectCard
                            title="Hoist"
                            description="Hoist is a fitness tracker that I also developed using .NET MAUI and SQLite. It allows you to create workout programs, track your workouts, and view your progress over time. It also has a built-in exercise library that allows you to search for exercises by name or category."
                            image="/images/hoist.jpg"
                            github="https://github.com/codychaplin/Hoist"
                        />
                        <ProjectCard
                            title="Unit Converter"
                            description="Unit Converter is a simple app I made to test out the process of publishing to the Google Play Store. It comes with all the common conversions and everything is available on one page so no need to navigate through a multitude of pages/categories, just simply scroll along the top to find the unit you're looking for."
                            image="/images/unit-converter.jpg"
                            github="https://github.com/codychaplin/UnitConverter"
                        />
                        <ProjectCard
                            title="Voxel Game"
                            description="Voxel Game is a passion project of mine. The long term goal is to create a highly efficient voxel engine that utilizes as many memory saving techniques as possible such as vertex compression, frustum and occlusion culling, greedy meshing, (potentially) sparse voxel octrees, multithreading, compute shaders and GPU instancing. I find graphics programming fascinating so this project gives me a chance to perform an extensive deep dive in the subject."
                            image="/images/voxel-game.jpg"
                            github="https://github.com/codychaplin/Voxel-Game"
                            landscape
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-10 flex flex-col items-center text-center bg-white dark:bg-gray-900">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-blue-100">Contact Me</h2>
                    <p className="text-xl my-3 text-gray-700 dark:text-blue-200">Want to get in touch?</p>
                    <p className="text-lg mb-8 text-gray-600 dark:text-blue-200">Feel free to reach out via email or LinkedIn, or check out my GitHub!</p>
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <ContactOption
                            href="mailto:chaplinbcody@gmail.com"
                            svgPath="M4 20q-0.825 0-1.413-0.588T2 18V6q0-0.825 0.588-1.413T4 4h16q0.825 0 1.413 0.588T22 6v12q0 0.825-0.588 1.413T20 20H4Zm8-7.5 8-5V6l-8 5-8-5v1.5l8 5Z"
                            title="Email"
                            description="For general inquiries, feel free to contact me via email. I'll do my best to respond promptly."
                        />
                        <ContactOption
                            href="https://www.linkedin.com/in/codychaplin"
                            svgPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            title="LinkedIn"
                            description="If you're interested in my professional experience or want to connect with me, check out my LinkedIn profile!"
                        />
                        <ContactOption
                            href="https://github.com/codychaplin"
                            svgPath="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                            title="GitHub"
                            description="To see some of the coding projects I've been working on and to get a sense of my coding style, check out my GitHub Profile!"
                        />
                    </div>
                </section>
            </main>

            <footer className="w-full py-4 bg-white dark:bg-gray-950 text-center text-gray-500 dark:text-blue-300 text-sm mt-auto">
                © {new Date().getFullYear()} Cody Chaplin. All rights reserved.
            </footer>
        </>
    );
}

export default Portfolio;
