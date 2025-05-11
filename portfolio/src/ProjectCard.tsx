import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    github: string;
    landscape?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, github, landscape }) => (
    <div className="bg-white rounded-lg shadow p-6 flex flex-row items-center gap-6">
        <img src={image} alt={title} className={`rounded ${landscape ? "w-80" : "w-40"}`} />
        <div className="flex flex-col items-start flex-1">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </div>
    </div>
);

export default ProjectCard;
