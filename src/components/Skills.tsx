import "./Skills.css"

function Skills() {
    return (
        <div className='containerTitle' id='skillsContainer'>
            <h1>Skills</h1>
            <div id='frontContainer' className='skillContainer'>
                <label className='skillsTitle' htmlFor='frontSkills'>Frontend: </label>
                <ul id='frontSkills'>
                    <li className="skillItem">TypeScript / JavaScript</li>
                    <li className="skillItem">React</li>
                    <li className="skillItem">Express</li>
                    <li className="skillItem">HTML</li>
                </ul>
            </div><br/>
            <div id="backContainer" className='skillContainer'>
                <label className='skillsTitle' htmlFor="backSkills">Backend:</label>
                <ul id="backSkills">
                    <li className="skillItem">Java</li>
                    <li className="skillItem">MySQL</li>
                    <li className="skillItem">postgreSQL</li>
                </ul>
            </div><br/>
            <div id="controlContainer" className='skillContainer'>
                <label className='skillsTitle' htmlFor="">Version Control:</label>
                <ul id='verControl'>
                    <li className="skillItem">GitHub</li>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default Skills