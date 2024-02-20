import './App.css';
import {ProjectView} from "./component/ProjectView";
import {useMemo} from "react";
import {createProjects} from "./data/Data";
import {ReactComponent as Github} from "./asset/github.svg";
import {ReactComponent as LinkedIn} from "./asset/linkedin.svg";
import {ReactComponent as Instagram} from "./asset/instagram.svg";

function App() {
    const projects = useMemo(() => {
        return createProjects().map(project => {
            return <ProjectView project={project}/>
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul>
                        <li><a href="#projects">My Projects</a></li>
                        <li><a href="#reach-out">Reach out</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </nav>
            </header>

            <div className="top-part">
                <img src={require('./asset/face.png')} alt="face" className="profile-picture"/>
                <div className="top-part-text">
                    <h1>Hi, I'm <span style={{color: "#099539"}}>Andy</span>.</h1>
                    <p>Mobile app developer with 9+ years of experience, expert in Kotlin, Kotlin Multiplatform, CLEAN
                        Architecture, and a business-oriented person. I'm a big fan of crypto. I also have experience in
                        developing cross-platform apps in React Native.</p>

                    <p>I'm passionate about creating user-centric applications that deliver a seamless user experience.
                        I thrive in a team environment, always open to exchanging ideas and learning from my peers,
                        actively seeking out feedback at every opportunity.</p>

                    <div className="separator-list">
                        <span>Deep Work</span>
                        <span>Clean Code</span>
                        <span>Beginner's mind</span>
                        <span>Reliability</span>
                        <span>Lifelong Learning</span>
                    </div>
                </div>
            </div>
            <h1 id="projects" className="projects-title">Have a look at some of my projects</h1>
            {projects}
            <div id="reach-out" className={"footer"}>
                <div className="footer-icon-wrapper">
                    <a href="https://www.linkedin.com/in/andrej-martin%C3%A1k-a5118731/"
                    ><LinkedIn className="footer-icon"/></a>
                    <a href="https://github.com/AmkSk/"><Github className="footer-icon"/></a>
                    <a href="https://www.instagram.com/andrej.martinak/"><Instagram className="footer-icon"/></a>
                </div>

                <p>Created by me in 2024 in React</p>
            </div>

        </div>
    );
}

export default App;
