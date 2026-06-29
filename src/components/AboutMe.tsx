import './AboutMe.css'

function AboutMe() {


    return (
        <div id='aboutMeContainer'>
            <div id='aboutImgContainer'><img id='aboutImg' src='pilt2.jpg' width={300}></img></div>
            <div id='aboutMeText'>
                <h1 style={{ background: "#ff4545", width: "fit-content", padding: '10px', color: "black" }}>About Me:</h1>
                <h3>Hello! My name is Roland.<br></br>I am currently a second-year student at
                    <a style={{ color: "#9A000C", WebkitTextStroke: "3px white", fontWeight: "bold", paintOrder: "stroke fill" }} href='https://www.tlu.ee/en' target='_blank'> Tallinn University</a>.<br />
                    Before enrolling, I already had three years of web development experience through self-study. <br></br>
                    I have been interested in technology and computers since I was about seven years old.
                </h3>

                <h1 id='education' style={{ background: "#60c74c", width: "fit-content", padding: '10px', color: "black" }}>Education:</h1>
                <h3>My main sources of education have been YouTube, FreeCodeCamp, and now Tallinn University.
                    I took a gap year in 2024 to focus on improving my web development skills.<br />In the long run, I believe it has paid off, due to the knowledge and skills I accquired.<br />
                    I have over 12 years of experience using and working with computers, much of which came from my time studying in Saku Gümnaasium,<br />
                    where I learned about computers and programming.<br /> Alongside my studies, I learned software development independently.<br />
                    I also took part in <a style={{ color: "#DCF900", WebkitTextStroke: "3px black", fontWeight: "bold", paintOrder: "stroke fill" }} href='https://kood.tech/en/' target='_blank'>kood/Jõhvi</a>
                    sprint in 2024, but sadly I lacked the necessary skills/knowledge to pass.</h3>

                <h1 id='skills' style={{ background: "#03fcdf", width: "fit-content", padding: '10px', color: "black" }}>Skills and Teamwork:</h1>
                <h3>I have built a variety of projects, where I have worked as a frontend, backend, and full-stack developer in multi-member teams.<br />
                    I am comfortable both in frontend and backend development, but prefer a focus on frontend.
                    <h3>I work well both independently and as part of a team.</h3></h3>
            </div>
        </div>
    )
}

export default AboutMe