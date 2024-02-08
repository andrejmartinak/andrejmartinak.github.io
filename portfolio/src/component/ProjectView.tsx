import './Project.css';
import {Project} from "../data/Data";

interface Props{
    project: Project;
}

export const ProjectView = ({project}: Props)=>{
    const style = {
        backgroundColor: project.color ? `${project.color}26` : 'transparent',
        width: '100%',
    };

    const imageOnLeftSide = project.imageSide === 'left'
    const imageOnRightSide = project.imageSide === 'right'

    return (
        <div className="project" style={style}>
            {imageOnLeftSide ? <img src={project.imageUrl} alt={project.name} className="project-img"/> : null}
            <div className="project-content">
                <h1>{project.name}</h1>
                <p><b>My role:</b> {project.role} <br></br> <b>Status:</b> {project.status}</p>
                <p>{project.description}</p>
                <a style={{color: project.color}} href={project.url}>{project.urlText ? project.urlText : project.url}</a>
            </div>
            {imageOnRightSide ? <img src={project.imageUrl} alt={project.name} className="project-img"/> : null}
        </div>
    );
}