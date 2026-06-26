import "./Projects.css"

function Projects() {
    return (<>
        <div id='projects'>
            <h1 id='title'>Projects</h1>
            <div id="minikino" className="projectContainer">
                <div className="imgContainer">
                    <img src="./public/minikino.svg" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div className="projectText">
                    <h3>
                        <p>Features</p>
                        Image, video and audio file upload<br />
                        Interactive game creation<br />
                        Game step editing<br />
                        Multiple categories
                        <p>Making of</p>
                        This project was built in a 5 member team in the span of 3 weeks,<br /> in an internship provided by Tallinn University
                    </h3>
                    <button className="linkBtn">GitHub</button>
                </div>
            </div>
            <div id="scl" className="projectContainer">
                <div className="imgContainer">
                    <img src="./public/scl.png" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div className="projectText">
                    <h3>
                        <p>Features</p>
                        Image, video and audio file upload<br />
                        Interactive game creation<br />
                        Game step editing<br />
                        Multiple categories
                        <p>Making of</p>
                        This project was built in a 5 member team in the span of 3 weeks,<br /> in an internship provided by Tallinn University
                    </h3>
                    <button className="linkBtn">GitHub</button>
                </div>
            </div>
            <div id="webstore" className="projectContainer">
                <div className="imgContainer">
                    <img src="./public/real.png" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div className="projectText">
                    <h3>
                        <p>Features</p>
                        Image, video and audio file upload<br />
                        Interactive game creation<br />
                        Game step editing<br />
                        Multiple categories
                        <p>Making of</p>
                        This project was built in a 5 member team in the span of 3 weeks,<br /> in an internship provided by Tallinn University
                    </h3>
                    <button className="linkBtn">GitHub</button>
                </div>
            </div>
        </div>
        <hr></hr>
    </>
    )
}

export default Projects