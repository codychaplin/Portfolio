import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    github: string;
    landscape?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, github, landscape }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-row items-center gap-6 border border-gray-200 dark:border-gray-700">
        <img src={image} alt={title} className={`rounded ${landscape ? "w-80" : "w-40"}`} />
        <div className="flex flex-col items-start flex-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-blue-100">{title}</h3>
            <p className="text-gray-600 dark:text-blue-200 mb-4">{description}</p>
            <a href={github} className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </div>
    </div>
);

export default ProjectCard;
