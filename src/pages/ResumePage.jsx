import React, { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../css/ResumePage.css"
import { projectsData } from "../data/ProjectsData";

const ResumePage = forwardRef((props, ref) => {
    const resumeRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });

    return (
        <div className="resume-container">
            <button className="btn print-btn" onClick={handlePrint}>
                Download Resume as PDF
            </button>
            <div className="container" ref={ref || resumeRef}>
                <div className="resume-content">
                    <header className="resume-header">
                        <h1 className="name">Tanveer Ahmed Khan</h1>
                        <p className="contact-info">
                            Email: <a href="mailto:ktanveerahmed8@gmail.com">ktanveerahmed8@gmail.com</a> | Phone: (+92) 307-8326321
                        </p>
                        <p className="contact-info">
                            <a href="https://www.linkedin.com/in/tanveer-ahmed-khan-465bab204" target='_blank' rel='noreferrer'>LinkedIn</a> | <a href="https://github.com/TARasti" target='_blank' rel='noreferrer'>GitHub</a> | <a href="https://tarasti.github.io/portfolio" target='_blank' rel='noreferrer'>Portfolio</a>
                        </p>
                    </header>

                    <section className="section experience-section">
                        <h2>Professional Experience</h2>
                        <div className="job">
                            <h3>Lead Full Stack Developer - SysReforms International</h3>
                            <p className="duration">Sep 2022 - Present</p>
                            <ul className="job-tasks">
                                <li>Led a team to develop a high-performance web application using React.js and Node.js</li>
                                <li>Lead the design and architecture of scalable, efficient, and secure software solutions for both the front-end and back-end.</li>
                                <li>Collaborated with cross-functional teams to deliver scalable solutions</li>
                            </ul>
                        </div>
                    </section>

                    <section className="section education-section">
                        <h2>Education</h2>
                        <div className="education">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>Pakistan Institute of Engineering and Applied Sciences (PIEAS), 2022</p>
                            <p>Relevant Coursework: Data Structures, Algorithms, Web Development</p>
                        </div>
                    </section>

                    <section className="section projects-section">
                        <h2>Projects</h2>
                        {
                            projectsData.map(data => 
                                <div className="project" key={data.id}>
                                    <h3>{data.name}</h3>
                                    <p className="duration">{data.status}</p>
                                    <p><strong>Technologies:</strong> {data.technologies}</p>
                                    <ul className="project-details">
                                        {data.short_description}
                                    </ul>
                                </div>
                            )
                        }
                    </section>

                    <section className="section skills-section">
                        <h2>Skills</h2>
                        <ul className="skills-list">
                            <li>JavaScript (React.js, Node.js)</li>
                            <li>Laravel</li>
                            <li>Express</li>
                            <li>Sequelize</li>
                            <li>Redis</li>
                            <li>HTML5 & CSS3</li>
                            <li>SQL & NoSQL Databases</li>
                            <li>Version Control (Git)</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
});

export default ResumePage;
