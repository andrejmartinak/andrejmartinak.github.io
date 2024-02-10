import './Project.css';
import {Project} from "../data/Data";
import {Chip} from "./Chip";

interface Props {
    project: Project;
}

export const ProjectView = ({project}: Props) => {
    const style = {
        backgroundColor: `${project.color}19`,
        width: '100%',
    };

    const imageOnLeftSide = project.imageSide === 'left'
    const imageOnRightSide = project.imageSide === 'right'

    const chips = project.techStack.map(name => {
        return <Chip text={name} color={project.color}/>
    })

    return (
        <div className="project" style={style}>
            <div className="project-wrapper">
                {imageOnLeftSide ? <img style={{marginRight: 48}} src={project.imageUrl} alt={project.name}
                                        className="project-img"/> : null}

                <div className="project-content">

                    <div className="project-header">
                        <img src={project.logoUrl} className="project-icon"/>
                        <h1 style={{color: project.color}}>{project.name}</h1>
                    </div>

                    <div className="info-container">
                        <div className="info">
                            <b style={{color: project.color}}>My role:</b>
                            <span>{project.role}</span>
                        </div>
                        <div className="info">
                            <b style={{color: project.color}}>Status:</b>
                            <span>{project.status}</span>
                        </div>
                    </div>

                    <p>{project.description}</p>
                    <a style={{color: project.color}}
                       href={project.url}>{project.urlText ? project.urlText : project.url}</a>
                    <div className="project-chips">{chips}</div>

                </div>
                {imageOnRightSide ? <img style={{marginLeft: 48}} src={project.imageUrl} alt={project.name}
                                         className="project-img"/> : null}
            </div>
        </div>
    );
}