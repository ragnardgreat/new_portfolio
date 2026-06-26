import "./Skills.css"

function Skills() {


    return (<>
        <div id='allSkills'>
            <div id='frontContainer' className='skillContainer'>
                <div className='skillsTitle'>Frontend: </div>
                <div id="frontCards" className="carousel">
                    <div id="feGroup1" className="group">
                        <div className="card"><h1>TypeScript</h1><img src="./public/typescript.png" width={40}></img></div>
                        <div className="card"><h1>React</h1><img src="./public/react.svg" width={40}></img></div>
                        <div className="card"><h1>HTML</h1><img src="./public/html.png" width={40}></img></div>
                        <div className="card"><h1>CSS</h1><img src="./public/css.png" width={40}></img></div>
                        <div className="card"><h1>TypeScript</h1><img src="./public/typescript.png" width={40}></img></div>
                        <div className="card"><h1>React</h1><img src="./public/react.svg" width={40}></img></div>
                        <div className="card"><h1>HTML</h1><img src="./public/html.png" width={40}></img></div>
                        <div className="card"><h1>CSS</h1><img src="./public/css.png" width={40}></img></div>
                    </div>
                    <div aria-hidden id="feGroup1" className="group">
                        <div className="card"><h1>TypeScript</h1><img src="./public/typescript.png" width={40}></img></div>
                        <div className="card"><h1>React</h1><img src="./public/react.svg" width={40}></img></div>
                        <div className="card"><h1>HTML</h1><img src="./public/html.png" width={40}></img></div>
                        <div className="card"><h1>CSS</h1><img src="./public/css.png" width={40}></img></div>
                        <div className="card"><h1>TypeScript</h1><img src="./public/typescript.png" width={40}></img></div>
                        <div className="card"><h1>React</h1><img src="./public/react.svg" width={40}></img></div>
                        <div className="card"><h1>HTML</h1><img src="./public/html.png" width={40}></img></div>
                        <div className="card"><h1>CSS</h1><img src="./public/css.png" width={40}></img></div>
                    </div>
                </div>
            </div><br />
            <div id="backContainer" className='skillContainer'>
                <div className='skillsTitle'>Backend: </div>
                <div id="backNames" className="skillNames">
                    <div id="backCards" className="carousel">
                        <div id="BeGroup1" className="group">
                            <div className="card"><h1>Java</h1><img src="./public/java.png" width={40}></img></div>
                            <div className="card"><h1>MySQL</h1><img src="./public/mysql.svg" width={40}></img></div>
                            <div className="card"><h1>postgreSQL</h1><img src="./public/postsql.png" width={40}></img></div>
                            <div className="card"><h1>Springboot</h1><img src="./public/springboot.png" width={40}></img></div>
                            <div className="card"><h1>Java</h1><img src="./public/java.png" width={40}></img></div>
                            <div className="card"><h1>MySQL</h1><img src="./public/mysql.svg" width={40}></img></div>
                            <div className="card"><h1>postgreSQL</h1><img src="./public/postsql.png" width={40}></img></div>
                            <div className="card"><h1>Springboot</h1><img src="./public/springboot.png" width={40}></img></div>
                        </div>
                        <div id="BeGroup1" className="group">
                            <div className="card"><h1>Java</h1><img src="./public/java.png" width={40}></img></div>
                            <div className="card"><h1>MySQL</h1><img src="./public/mysql.svg" width={40}></img></div>
                            <div className="card"><h1>postgreSQL</h1><img src="./public/postsql.png" width={40}></img></div>
                            <div className="card"><h1>Springboot</h1><img src="./public/springboot.png" width={40}></img></div>
                            <div className="card"><h1>Java</h1><img src="./public/java.png" width={40}></img></div>
                            <div className="card"><h1>MySQL</h1><img src="./public/mysql.svg" width={40}></img></div>
                            <div className="card"><h1>postgreSQL</h1><img src="./public/postsql.png" width={40}></img></div>
                            <div className="card"><h1>Springboot</h1><img src="./public/springboot.png" width={40}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Skills