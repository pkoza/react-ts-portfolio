import React from "react";
import { Link } from "react-router-dom";
import {ArrowLeft} from "react-feather";

export interface HeaderProps {
    title: {
        text: string,
        link?: string
    };
    backButton?: {
        text?: string,
        link: string
    }
    navigation?: Array<{
        link: string,
        text: string,
        key: string | number
    }>;
}

const Header: React.FC<HeaderProps> = ({title, backButton, navigation}) =>
    <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="grid grid-cols-3 items-center py-4 px-6">
            {/* Left content*/}
            <div className="justify-self-start md:pl-4">
                {backButton &&
                    <Link to={backButton.link} className="text-primary hover:text-secondary flex items-center space-x-2">
                        <ArrowLeft size={18} />
                        <span>{backButton.text}</span>
                    </Link>
                }
            </div>
            {/* Middle content) */}
            <h1 className="text-2xl font-bold text-primary justify-self-center">
                {title.link ?
                    <a href={title.link}>
                    {title.text}
                    </a>
                    :
                    title.text
                }
            </h1>
            {/* Right content */}
            <nav className="flex space-x-6 justify-self-end pr-8">
                {navigation && navigation.map(item => <a href={item.link} key={item.key} className="hover:text-secondary">{item.text}</a>)}
            </nav>
        </div>
    </header>

export default Header;
