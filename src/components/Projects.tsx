import "./Projects.css"

function Projects() {
    return (<>
        <div id='projects'>
            <h1 id='projectsTitle'>Projects</h1>
            <div id="minikino" className="projectContainer">
                <h2 className="projectTitle">Minikino</h2>
                <label>Description:</label>
                <h2 className="projectLinks">Links: </h2>
            </div>
            <div id="scl" className="projectContainer">
                <h2>SCL.</h2>
                <label>Description:</label>
                <h2 className="projectLinks">Links: </h2>
            </div>
            <div id="webstore" className="projectContainer">
                <h2>Real Webstore</h2>
                <label>Description:</label>
                <h2 className="projectLinks">Links: </h2>
            </div>
        </div>
        <hr></hr>
    </>
    )
}

export default Projects