import './AboutMe.css'

function AboutMe() {


    return (
        <div id='aboutMeContainer'>
            <div id='aboutImgContainer'><img id='aboutImg' src='pilt2.jpg' width={300}></img></div>
            <div id='aboutMeText'>
                <h1 style={{ background: "#ff4545", width: "fit-content", padding: '10px', color: "black" }}>About Me:</h1>
                <h3>Hello, my name is Roland!<br></br>Currently I am a second year student at Tallinn University, but before enrolling, I already had Web development experience of 3+ years from studying on my own. <br></br>
                    I have been interested in technology and computers since I was ~7 years old.
                </h3>

                <h1 id='education' style={{ background: "#60c74c", width: "fit-content", padding: '10px', color: "black" }}>Education:</h1>
                <h3>Main sources for education were YouTube and FreeCodeCamp, and now also Tallinn University
                I took a gap year in 2024 just to focus and hone in on web development, and in the long run I do believe it paid off, due to the knowledge and skills I accquired.
                I have an extensive history ( 12 years ) with computers, which mostly came from my time studying in Saku Gümnaasium,
                where I learned about computers and programming and on the side I studied software development more extensively.</h3>

                <h1 id='skills' style={{ background: "#03fcdf", width: "fit-content", padding: '10px', color: "black" }}>Skills and Teamwork:</h1>
                <h3>I have built may different projects, where my roles have been frontend, backend and/or full-stack developer in multi-member teams.
                I am comfortable both in frontend and backend development, but prefer a focus on frontend.
                <h3>I work well with other people and in groups, also don't mind working alone.</h3></h3>
            </div>
        </div>
    )
}

export default AboutMe