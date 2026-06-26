import "./Projects.css"

function Projects() {
    return (<>
        <div id='projects'>
            <h1 id='title'>Projects</h1>
            <div id="minikino" className="projectContainer">
                <h2 className="projectTitle">Minikino</h2>
                <label>Description:</label>
                <h3>This is a description</h3>
                <label className="linksLabel">Links: </label>
                <ul>
                    <li>Link1</li>
                    <li>link2</li>
                    <li>link3</li>
                </ul>
            </div>
            <div id="scl" className="projectContainer">
                <h2 className="projectTitle" >SCL.</h2>
                <label>Description:</label>
                <h3>This is a description</h3>
                <label className="linksLabel">Links: </label>
                <ul>
                    <li>Link1</li>
                    <li>link2</li>
                    <li>link3</li>
                </ul>
            </div>
            <div id="webstore" className="projectContainer">
                <h2 className="projectTitle">Real Webstore</h2>
                <label>Description:</label>
                <h3>This is a description</h3>
                <label className="linksLabel">Links: </label>
                <ul>
                    <li>Link1</li>
                    <li>link2</li>
                    <li>link3</li>
                </ul>
            </div>
        </div>
        <hr></hr>
    </>
    )
}

export default Projects