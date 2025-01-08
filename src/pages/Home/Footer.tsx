import React from "react";

const Footer: React.FC = () =>
    <footer className="bg-gray-800 text-gray-200 py-12">
        <div className="container mx-auto text-center">
            <p>Built with React, Redux and Tailwind CSS</p>
            <div className="flex justify-center space-x-6 mt-6">
                <a href="#" className="hover:text-secondary">This project on GitHub</a>
                <a href="#" className="hover:text-secondary">API on GitHub</a>
                <a href="#" className="hover:text-secondary">LinkedIn</a>
            </div>
        </div>
    </footer>

export default Footer;
