import './AboutMe.css'

function AboutMe() {
    return (
        <div id='aboutMeContainer'>
            <div id='aboutMeText'>
                <h1 style={{background: "#ff4545",width:"fit-content", padding:'10px', color:"black"}}>Who:</h1>
                <h3>Currently I am a second year student at Tallinn University, but before that I already had Web development experience of 3 years from studying on my own.</h3>
                <h1 style={{background: "#60c74c",width:"fit-content", padding:'10px', color:"black"}}>Education:</h1>
                <h3>Main sources for education were YouTube and FreeCodeCamp, and now also Tallin University</h3>
                <h3>I took a gap year just to focus and hone in on web development, and in the long run I do believe it paid off, due to the knowledge and skills I accquired.</h3>
                <h1 style={{background: "#03fcdf",width:"fit-content", padding:'10px', color:"black"}}>Skills and Teamwork:</h1>
                <h3>I have built may different projects, where my roles have been frontend, backend and/or full-stack developer in multi-member teams.</h3>
                <h3>I am comfortable both in frontend and backend development, but prefer a focus on frontend</h3>
            </div>
        </div>
    )
}

export default AboutMe