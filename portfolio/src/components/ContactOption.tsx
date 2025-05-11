import React from "react";

interface ContactOptionProps {
    href: string;
    imgSrc: string;
    title: string;
    description: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({ href, imgSrc, title, description }) => (
    <div className="border-2 border-blue-400 rounded bg-white p-6 flex flex-col items-center w-72 shadow">
        <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
            <img src={imgSrc} alt={title} className="w-12 h-12 my-4" />
        </a>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm my-4 text-gray-600">{description}</p>
    </div>
);

export default ContactOption;
