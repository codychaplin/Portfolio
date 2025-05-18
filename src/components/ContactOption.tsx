import React from "react";

interface ContactOptionProps {
    href: string;
    svgPath: string;
    title: string;
    description: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ href, svgPath, title, description }) => (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800 p-4 flex flex-col items-center w-72 shadow">
        <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
            <svg className="w-12 h-12 mb-4 text-blue-400 dark:text-blue-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={svgPath} />
            </svg>
        </a>
        <p className="text-xl font-semibold text-gray-900 dark:text-blue-100">{title}</p>
        <p className="text-sm my-4 text-gray-600 dark:text-blue-200">{description}</p>
    </div>
);

export default ContactOption;
