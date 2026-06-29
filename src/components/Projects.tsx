import "./Projects.css"

function Projects() {

    window.addEventListener("scroll", () => {
        if (checkVisible(document.getElementById("realLogo")!)) {
            document.getElementById("webstore")!.style.animation = "slideIn 1s forwards"
        }
        else {
            document.getElementById("webstore")!.style.animation = "slideOut 1s forwards"
        }
        if (checkVisible(document.getElementById("sclLogo")!)) {
            document.getElementById("scl")!.style.animation = "slideIn 1s forwards"
        }
        else {
            document.getElementById("scl")!.style.animation = "slideOut 1s forwards"
        }
        if (checkVisible(document.getElementById("miniLogo")!)) {
            document.getElementById("minikino")!.style.animation = "slideIn 1s forwards"
        }
        else {
            document.getElementById("minikino")!.style.animation = "slideOut 1s forwards"
        }
    })

    function checkVisible(elm: HTMLElement) {
        const rect = elm.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    return (<>
        <div id='projects'>
            <h1 id='title'>Projects<br />
                <p>As the years go by, my skills improve</p>
            </h1>
            <div id="webstore" className="projectContainer" >
                <div className="imgContainer">
                    <img id="realLogo" src="real.png" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div id="realText" className="projectText">
                    <h3>
                        <p>2024</p>
                        <p>About</p>
                        A webstore built with <a style={{ "color": "blue" }} href="https://fakestoreapi.com/" target="_blank">fakestoreapi</a>.<br />
                        Features account login, product pages, and a shopping cart<br />
                        Although simple, it still provides an effective and understandable website
                        <p>Making of</p>
                        Built this project back in 2024 in 1-2 weeks<br /> back when web development was still new to me.
                        <p>Built with</p>
                        JavaScript<br />React<br />React router
                    </h3>
                    <p> Images and video demonstrations</p>
                    <button className="linkBtn"><img src="github.png" width={20}></img> <a id="realBtn" href="https://github.com/ragnardgreat/store-app" target="_blank">GitHub</a></button>
                </div>
            </div>

            <div id="scl" className="projectContainer">
                <div className="imgContainer">
                    <img id="sclLogo" src="scl.png" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div id="sclText" className="projectText">
                    <h3>
                        <p>2025</p>
                        <p>About</p>
                        A social media platform, similar to Instagram or X, <br />
                        with functional account and post creation and editing.
                        <p>Making of</p>
                        I built this project independently in 2025 over the course of 2-3 months.<br />
                        One of my bigger personal projects.<br />
                        I learned many new skills thanks to this project
                        <p>Built with</p>
                        Node.js/express<br />JavaScript<br />React<br /> MySQL
                    </h3>
                    <p> Images and video demonstrations</p>
                    <button className="linkBtn"><img src="github.png" width={20}></img> <a id="sclBtn" href="https://github.com/ragnardgreat/scl-app" target="_blank">GitHub</a></button>
                </div>
            </div>
            <div id="minikino" className="projectContainer">
                <div className="imgContainer">
                    <img id="miniLogo" src="minikino.svg" className="projectTitle" width={300} /><br></br><br></br>
                </div>
                <div id="miniText" className="projectText">
                    <h3>
                        <p>2026</p>
                        <p>About</p>
                        A website to teach children about media literacy
                        through interactive games about image, video, and audio editing.
                        <p>Making of</p>
                        This project was built in a 5 member team in the span of 3 weeks<br /> as part of an internship provided by Tallinn University.
                        <p>Built with</p>
                        Java<br />Spring Boot<br /> TypeScript<br />React<br /> PostgreSQL
                    </h3>
                    <p> Images and video demonstrations</p>
                    <button className="linkBtn"><img src="github.png" width={20}></img> <a id="minibtn" href="https://github.com/Shargathx/Cinimini_project" target="_blank">GitHub</a></button>
                </div>
            </div>
        </div>
        <hr></hr>
    </>
    )
}

export default Projects