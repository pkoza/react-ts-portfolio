import React from "react";
import './Home.css'
import {Link} from "react-router-dom";
import Card from "./Card.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "./Footer.tsx";



const Home: React.FC = () => {
    return <div className="bg-gray-100 text-gray-800">
        <Header
            title={{text: "Personal portfolio", link:"#home"}}
            navigation={[
                { link: '#home', text: 'Home', key: 1 },
                { link: '#about', text: 'About Me', key: 2 },
                { link: '#portfolio', text: 'Portfolio', key: 3 },
                { link: '#survey', text: 'Survey!', key: 4 },
                { link: '#contact', text: 'Contact', key: 5 }
            ]}
        />

        {/* Intro/Home Section */}
        <section id="home" className="bg-primary text-white h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Hi, I'm Peter Koza</h2>
                <p className="text-xl md:text-2xl mb-8">Frontend(React)/Fullstack Developer with a Passion for Crafting User Experiences</p>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen py-24 bg-gray-200 flex items-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">About Me</h3>
                <p className="text-lg max-w-2xl mx-auto mb-12">Currently used technologies:</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <Card title={"React"} description={"Building robust front-end interfaces."} />
                    <Card title={"Redux"} description={"Managing centralized state for complex applications."} />
                    <Card title={"Node.js"} description={"Seamless backend integrations."} />
                    <Card title={"Tailwind CSS"} description={"Responsive and modern designs."} />
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="h-screen py-24 flex items-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Projects I worked on</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title={"Project 1"} description={"A brief description of the project."} link={{target: "#", label: "View Project"}}/>
                    <Card title={"Project 2"} description={"A brief description of the project."} link={{target: "#", label: "View Project"}}/>
                    <Card title={"Project 3"} description={"A brief description of the project."} link={{target: "#", label: "View Project"}}/>
                </div>
            </div>
        </section>

        {/* Survey Section */}
        <section id="survey" className="h-screen bg-gray-200 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-8">That's some info about me. Can I also ask you a question?</h3>
                <p className="text-lg mb-8">What are your favorite frontend technologies?</p>
                <div className="flex justify-center space-x-6">
                    <Link to="/survey" className="bg-secondary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">Take a Survey</Link>
                    <Link to="/results" className="bg-primary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">No, just show me results</Link>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex items-center justify-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <p className="text-lg mb-8">Feel free to reach out to me for collaborations, questions, or just to say hi!</p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:yourname@example.com" className="bg-primary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">Email Me</a>
                    <a href="#" className="bg-secondary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">LinkedIn</a>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
};

export default Home;
