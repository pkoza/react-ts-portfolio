import React from "react";

export interface CardProps {
    title: string,
    description: string,
    link?: {
        target: string,
        label: string
    }
}

const Card: React.FC<CardProps> = ({title, description, link} : CardProps) =>
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h4 className="font-semibold mb-4">{title}</h4>
        <p>{description}</p>
        {link && <a href={link.target} className="text-primary hover:underline">{link.label}</a>}
    </div>

export default Card;

