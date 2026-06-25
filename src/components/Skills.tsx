import "./Skills.css"

function Skills() {

    const feScroll1 = [
        "TypeScript",
        "React",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "HTML",
        "CSS"
    ]

    const beScroll = [
        "Java",
        "MySQL",
        "postgreSQL",
        "Java",
        "MySQL",
        "postgreSQL"

    ]


    return (<>
        <div id='frontContainer' className='skillContainer'>
            <div className='skillsTitle'>Frontend: </div>
            <div id="frontCards" className="carousel">
                <div id="feGroup1" className="group">
                    {feScroll1.map(item =>
                        <h1 className="card">{item}</h1>
                    )}
                </div>
                <div aria-hidden id="feGroup1" className="group">
                    {feScroll1.map(item =>
                        <h1 className="card">{item}</h1>
                    )}
                </div>
            </div>
        </div><br />
        <div id="backContainer" className='skillContainer'>
            <div className='skillsTitle'>Backend: </div>
            <div id="backNames" className="skillNames">
                <div id="backCards" className="carousel">
                    <div id="BeGroup1" className="group">
                        {beScroll.map(item =>
                            <h1 className="card">{item}</h1>
                        )}
                    </div>
                    <div id="BeGroup1" className="group">
                        {beScroll.map(item =>
                            <h1 className="card">{item}</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Skills