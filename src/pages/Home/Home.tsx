import React from "react";
import './Home.css'
import {Link} from "react-router-dom";
import Card from "./Card.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "./Footer.tsx";
import iconReact from "../../assets/react.svg";
import iconNodejs from "../../assets/nodejs.svg";
import iconPostgresql from "../../assets/postgresql.svg";
import iconRedux from "../../assets/redux.svg";
import iconTailwind from "../../assets/tailwind.svg";
import iconTypescript from "../../assets/typescript.svg";


const Home: React.FC = () => {
    return <div className="bg-gray-100 text-gray-800">
        <Header
            title={{text: "Personal portfolio", link:"#home"}}
            navigation={[
                { link: '#home', text: 'Home', key: 1 },
                { link: '#technologies', text: 'Technologies', key: 2 },
                { link: '#projects', text: 'Projects', key: 3 },
                { link: '#survey', text: 'Survey!', key: 4 },
                { link: '#contact', text: 'Contact', key: 5 }
            ]}
        />

        {/* Intro/Home Section */}
        <section id="home" className="bg-primary text-white h-screen flex items-center justify-center py-6">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to my Personal Portfolio</h2>
                <p className="text-xl md:text-2xl mb-8">My name is Peter Koza and I'm a Fullstack Developer based in Brno, CZ</p>
            </div>
        </section>

        {/* About Section */}
        <section id="technologies" className="min-h-screen py-24 bg-gray-200 flex items-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">About Me</h3>
                <p className="text-lg max-w-2xl mx-auto mb-12">Currently used technologies:</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <Card title="React" icon={iconReact} description="Building robust front-end interfaces." />
                    <Card title="Redux" icon={iconRedux} description="Managing centralized state for complex applications." />
                    <Card title="Typescript" icon={iconTypescript} description="Type safety" />
                    <Card title="Tailwind CSS" icon={iconTailwind} description="Responsive and modern designs." />
                    <Card title="Node.js" icon={iconNodejs} description="Core of backend integrations." customClass="md:col-start-2" />
                    <Card title="PostgreSQL; PL/pgSQL" icon={iconPostgresql} description="Data persistence. Efficient stored procedures." />
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen py-24 flex items-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Some of the projects I worked on</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title="SÚKL" description="Executed multiple migrations to React/Redux. Delivered fullstack development solutions."/>
                    <Card title="Barum Continental" description="Developed an internal PWA tailored to the customer’s continually evolving ideas and requirements."/>
                    <Card title="O2.sk" description="UI Enhancements, Tech stack migration"/>
                </div>
            </div>
        </section>

        {/* Survey Section */}
        <section id="survey" className="h-screen bg-gray-200 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-8">That's something about me. I also have a question for you.</h3>
                <p className="text-lg mb-8">What are your favorite frontend technologies?</p>
                <div className="flex justify-center space-x-6">
                    <Link to="/survey" className="bg-primary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">Take a Survey</Link>
                    <Link to="/results" className="bg-secondary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">No, just show me results</Link>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex items-center justify-center">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <p className="text-lg mb-8">Feel free to reach out to me for collaborations, questions, or just to say hi!</p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:p.koza@hotmail.sk" className="bg-primary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">Email Me</a>
                    <a href="https://www.linkedin.com/in/peter-koza-aa6b7296/" className="bg-secondary text-white py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90">LinkedIn</a>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
};

export default Home;
