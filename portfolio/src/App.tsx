import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import ContactOption from "./components/ContactOption";

function App() {
    useEffect(() => {
        const handleLinkClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
                const id = target.getAttribute("href")!.slice(1);
                const el = document.getElementById(id);
                if (el) {
                    e.preventDefault();
                    const navbar = document.querySelector("nav");
                    const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };
        document.addEventListener("click", handleLinkClick);
        return () => document.removeEventListener("click", handleLinkClick);
    }, []);

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
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            {/* Navbar */}
            <nav className="w-full py-6 bg-white shadow-md sticky top-0 z-10">
                <ul className="flex justify-center gap-8 text-lg font-semibold">
                    <li>
                        <a href="#about" className="hover:text-blue-600 transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-blue-600 transition-colors">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-600 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center px-4">
                {/* About Section */}
                <section id="about" className="py-10 flex flex-col items-center text-center">
                    <img src="/Portfolio/images/headshot.jpg" alt="Cody Chaplin" className="w-96 h-96 rounded-full object-cover mb-6 border-4 border-blue-200" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Cody Chaplin</h1>
                    <p className="text-xl md:text-2xl mb-6">Software Developer</p>
                    <p className="text-base md:text-lg text-gray-600">
                        Hi, I'm Cody Chaplin, a <strong>full-stack developer</strong> from Ontario, Canada. I have two diplomas in Computer Systems/Networking and Computer
                        Programming, respectively. I love working with <strong>C#</strong> and <strong>JavaScript</strong> making <strong>Mobile</strong> and <strong>Web</strong>{" "}
                        applications. I am currently a full-stack developer at a small company in the medical industry, where I maintain a cross-platform <strong>.NET MAUI</strong>{" "}
                        mobile app and an <strong>AI/data analytics</strong> server. The app is used by doctors and students as an activity log and the server is used to streamline
                        the logging process by utilizing <strong>LLMs</strong> and <strong>analyze/visualize</strong> the data collected by the app.
                    </p>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-8">Skills</h2>
                    <ul className="flex flex-wrap justify-center gap-4 mb-6">
                        {skills.map((skill) => (
                            <li key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <ProjectCard
                            title="MoMoney"
                            description="MoMoney is a finance tracker that I developed for my personal use. It was made using .NET MAUI and uses an SQLite database to store transactions, accounts, categories, stocks, and db logs. It can show you trends in your data, visualizations, account balances, and real-time stock prices via webscraping."
                            image="/Portfolio/images/momoney.jpg"
                            github="https://github.com/codychaplin/MoMoney"
                        />
                        <ProjectCard
                            title="Hoist"
                            description="Hoist is a fitness tracker that I also developed using .NET MAUI and SQLite. It allows you to create workout programs, track your workouts, and view your progress over time. It also has a built-in exercise library that allows you to search for exercises by name or category."
                            image="/Portfolio/images/hoist.jpg"
                            github="https://github.com/codychaplin/Hoist"
                        />
                        <ProjectCard
                            title="Unit Converter"
                            description="Unit Converter is a simple app I made to test out the process of publishing to the Google Play Store. It comes with all the common conversions and everything is available on one page so no need to navigate through a multitude of pages/categories, just simply scroll along the top to find the unit you're looking for."
                            image="/Portfolio/images/unit-converter.jpg"
                            github="https://github.com/codychaplin/UnitConverter"
                        />
                        <ProjectCard
                            title="Voxel Game"
                            description="Voxel Game is a passion project of mine. The long term goal is to create a highly efficient voxel engine that utilizes as many memory saving techniques as possible such as vertex compression, frustum and occlusion culling, greedy meshing, (potentially) sparse voxel octrees, multithreading, compute shaders and GPU instancing. I find graphics programming fascinating so this project gives me a chance to perform an extensive deep dive in the subject."
                            image="/Portfolio/images/voxel-game.jpg"
                            github="https://github.com/codychaplin/Voxel-Game"
                            landscape
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <p className="text-xl my-3 text-gray-700">Want to get in touch?</p>
                    <p className="text-lg mb-8 text-gray-600">Feel free to reach out via email or LinkedIn, or check out my GitHub!</p>
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <ContactOption
                            href="mailto:chaplinbcody@gmail.com"
                            imgSrc="/Portfolio/images/email.svg"
                            title="Email"
                            description="For general inquiries, feel free to contact me via email. I'll do my best to respond promptly."
                        />
                        <ContactOption
                            href="https://www.linkedin.com/in/codychaplin"
                            imgSrc="/Portfolio/images/linkedin-logo.svg"
                            title="LinkedIn"
                            description="If you're interested in my professional experience or want to connect with me, check out my LinkedIn profile!"
                        />
                        <ContactOption
                            href="https://github.com/codychaplin"
                            imgSrc="/Portfolio/images/github-logo.svg"
                            title="GitHub"
                            description="To see some of the coding projects I've been working on and to get a sense of my coding style, check out my GitHub Profile!"
                        />
                    </div>
                </section>
            </main>

            <footer className="w-full py-4 bg-white text-center text-gray-500 text-sm mt-auto">© {new Date().getFullYear()} Cody Chaplin. All rights reserved.</footer>
        </div>
    );
}

export default App;
