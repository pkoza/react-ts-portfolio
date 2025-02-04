import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowLeft, Menu, X} from "react-feather";

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

const Header: React.FC<HeaderProps> = ({title, backButton, navigation}) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNavOpen = () => setMobileNavOpen(!isMobileNavOpen);

    return <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="grid grid-cols-3 items-center py-4 px-6">
            {/* Back button */}
            <div className="justify-self-start lg:pl-4">
                {backButton &&
                  <Link to={backButton.link} className="text-primary hover:text-secondary flex items-center space-x-2">
                    <ArrowLeft size={18}/>
                    <span>{backButton.text}</span>
                  </Link>
                }
            </div>
            {/* Title) */}
            <h1 className="text-2xl font-bold text-primary text-center justify-self-center">
                {title.link ?
                    <a href={title.link}>
                        {title.text}
                    </a>
                    :
                    title.text
                }
            </h1>
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-2 xl:space-x-6  justify-self-end xl:pr-8">
                {navigation && navigation.map(item => <a href={item.link} key={item.key} className="hover:text-secondary">{item.text}</a>)}
            </nav>
                {navigation && <>
                    <button className="block lg:hidden text-primary justify-self-end" onClick={toggleMobileNavOpen}>
                        {isMobileNavOpen ? <X/> : <Menu/>}
                    </button>
                    <nav className={`${isMobileNavOpen ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0 pointer-events-none'} lg:hidden absolute top-full right-0 bg-white w-auto pl-4 pr-8 rounded-b-md transition-all duration-300 ease-in-out`}>
                        {navigation && navigation.map(item => <a href={item.link} key={item.key} className="block p-4 hover:text-secondary">{item.text}</a>)}
                    </nav>
                </>}
        </div>
    </header>
}

export default Header;
