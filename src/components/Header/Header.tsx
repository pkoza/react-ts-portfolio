import React from "react";

export interface HeaderProps {
    title: {text: string, link?: string};
    navigation?: Array<{link: string, text: string, key: string | number}>;
}

const Header: React.FC<HeaderProps> = ({navigation, title}) =>
    <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-primary"><a href={title.link}>{title.text}</a></h1>
            {navigation &&
                <nav className="flex space-x-6">
                    {navigation.map(item => <a href={item.link} key={item.key} className="hover:text-secondary">{item.text}</a>)}
                </nav>
            }
        </div>
    </header>

export default Header;
