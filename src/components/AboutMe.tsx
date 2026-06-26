import './AboutMe.css'

function AboutMe() {


    window.addEventListener("scroll", () => {
        if (checkVisible(document.getElementById("aboutMeText")!)) {
            document.body.style.animation = "bgFadeBlack 1s linear forwards"
        }
        else {
            document.body.style.animation = "bgFadeWhite 1s linear forwards"
        }
    })

    function checkVisible(elm: HTMLElement) {
        const rect = elm.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }


    return (
        <div id='aboutMeContainer'>
            <div id='aboutMeText'>
                <h1 style={{ background: "#ff4545", width: "fit-content", padding: '10px', color: "black" }}>About Me:</h1>
                <h3>Hello, my name is Roland!<br></br>Currently I am a second year student at Tallinn University, but before enrolling, I already had Web development experience of 3+ years from studying on my own. <br></br>
                    I have been interested in technology and computers since I was ~7 years old.
                </h3>
                <h1 style={{ background: "#60c74c", width: "fit-content", padding: '10px', color: "black" }}>Education:</h1>
                <h3>Main sources for education were YouTube and FreeCodeCamp, and now also Tallin University</h3>
                <h3>I took a gap year just to focus and hone in on web development, and in the long run I do believe it paid off, due to the knowledge and skills I accquired.</h3>
                <h3>I have an extensive history ( 12 years ) with computers and software developement, which mostly came from my time studying in Saku Gümnaasium,<br />
                    where I learned about computers and programming. And on the side I studied web development.</h3>
                <h1 style={{ background: "#03fcdf", width: "fit-content", padding: '10px', color: "black" }}>Skills and Teamwork:</h1>
                <h3>I have built may different projects, where my roles have been frontend, backend and/or full-stack developer in multi-member teams.</h3>
                <h3>I am comfortable both in frontend and backend development, but prefer a focus on frontend.</h3>
                <h3>i work well with other people and in groups, and also don't mind working alone.</h3>
            </div>
            <img src='./public/react.svg' width={500}></img>
        </div>
    )
}

export default AboutMe