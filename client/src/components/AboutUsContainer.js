import React, { Fragment, useState } from 'react';
import './AboutUsContainer.css';

const AboutUsContainer = ({ id }) => {
    const [ toggleTab, setToggleTab ] = useState(1);
    const toggleState = (index) => {
        setToggleTab(index);
    }
    return (
        <div id={id}>
        <Fragment className="about-us-container">
            <section className="about">
                <div className="row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">
                            <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(1)}>
                                <h2>About</h2>
                            </div>

                            <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(2)}>
                                <h2>Skills</h2>
                            </div>

                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                                onClick={() => toggleState(3)}>
                                <h2>Experience</h2>
                            </div>
                        </div>
                        <div className="tab-content">
                        {/* about content */}
                        <div className={toggleTab === 1 ? "content active-content": "content"}>
                            <h2>My Story</h2>
                            <p>Hi there! My name is Henry and I am a third-year Computer Engineering student at the University of California, San Diego. I am very passionate about software engineering and always looking for opportunities to further my learning and experience through internships, projects, and research. In my free time, I enjoy using my programming skills to help local businesses in my community. I am eager to continue learning and gaining a deeper understanding of software engineering and its practical applications.</p>
                        </div>

                        {/* skill content */}
                        <div className={toggleTab === 2 ? "content active-content": "content"}>
                            <h2>My Skills</h2>
                            <p>Lorem ipsum dolor sit amet. Sit dolorum adipisci non nostrum assumenda rem tempore alias non numquam rerum. Quo placeat sunt aut accusantium quod et dolorum illum qui autem quis ut suscipit voluptate cum dolores ratione non pariatur facere. Qui labore error aut tempora autem eum sunt mollitia quo molestiae quia in quisquam veniam.</p>
                            <div className="skills-row">

                                <div className="skills-column">
                                    <div className="progress-wrap">
                                        <h3>Fades</h3>
                                        <div className="progress Developer">
                                            <div className="progress-bar">
                                                <span>80%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills-column">
                                    <div className="progress-wrap">
                                        <h3>Tapers</h3>
                                        <div className="progress Designer">
                                            <div className="progress-bar">
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills-column">
                                    <div className="progress-wrap">
                                        <h3>Edgars</h3>
                                        <div className="progress PhotoShop">
                                            <div className="progress-bar">
                                                <span>88%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills-column">
                                    <div className="progress-wrap">
                                        <h3>Mullets</h3>
                                        <div className="progress Something">
                                            <div className="progress-bar">
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                        {/* Experience content */}
                        <div className={toggleTab === 3 ? "content active-content": "content"}>
                            <div className="exp-column">
                                <h3>Software Engineer Intern @ Viasat</h3>
                                <span>Jun 2022 - Sep 2022</span>
                                <p>- Automated testing framework for Link 16 radios using Python scripting, MATLAB, and RF equipment SCPI commands to streamline existing manual testing procedures <br/>
- Redesigned error handling and optimizing existing libraries to expedite the certification process by 60%</p>
                            </div>

                            <div className="exp-column">
                                <h3>Software Developer Intern @ Palo Verde Generating Station</h3>
                                <span>Jun 2021 - Aug 2021</span>
                                <p>- Designed full stack web application utilizing MySQL facilitating the acquisition of files for reworking and replacing electrical components crucial to the plant's maximum power output <br/>
- Researched and proposed method of replacing Foxboro electrical components to help eliminate plant vulnerabilities while saving thousands of dollars</p>
                            </div>

                        </div>

                    </div>
                    </div>

                </div>
            </section>
        </Fragment>
        </div>
    )
}

export default AboutUsContainer;