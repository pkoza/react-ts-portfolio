import React from "react";

export interface CardProps {
    title: string,
    description: string,
    icon?: string,
    link?: {
        target: string,
        label: string
    }
}

const Card: React.FC<CardProps> = ({title, description, icon, link} : CardProps) =>
    <div className="grid place-items-center bg-white shadow-md rounded-lg p-8">
        {icon && <img className="w-8 h-8 mb-4" src={icon}/>}
        <h4 className="font-semibold mb-4">{title}</h4>
        <p>{description}</p>
        {link && <a href={link.target} className="text-primary hover:underline">{link.label}</a>}
    </div>

export default Card;

