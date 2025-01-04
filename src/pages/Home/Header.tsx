import React from "react";

const Header: React.FC = () =>
    <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-primary"><a href="#home">Peter Koza</a></h1>
            <nav className="flex space-x-6">
                <a href="#home" className="hover:text-secondary">Home</a>
                <a href="#about" className="hover:text-secondary">About Me</a>
                <a href="#portfolio" className="hover:text-secondary">Portfolio</a>
                <a href="#survey" className="hover:text-secondary">Survey!</a>
                <a href="#contact" className="hover:text-secondary">Contact</a>
            </nav>
        </div>
    </header>

export default Header;
