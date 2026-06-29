import "./Contact.css"

function Contact() {
  return (<>
    <h1 id="contactTitle">Contact:</h1>
    <div id='contactContainer'>
      <a className="contactItem" href="https://www.linkedin.com/in/roland-piperal-932a4a347/" target="_blank">
        <div className="contact">
          <div className="contactImgContainer">
            <img src="./src/assets/linkedin.png" width={60}></img>
          </div>
          <h1>LinkedIn</h1>
        </div>
      </a>
      <a className="contactItem" href="https://github.com/ragnardgreat" target="_blank">
        <div className="contact">
          <div className="contactImgContainer">
            <img src="./src/assets/github.png" width={60}></img>
          </div>
          <h1>Github: ragnardgreat</h1>
        </div>
      </a>
      <a className="contactItem" href="https://github.com/piperal/" target="_blank">
        <div className="contact">
          <div className="contactImgContainer">
            <img src="./src/assets/github.png" width={60}></img>
          </div>
          <h1>Github: piperal</h1>
        </div>
      </a>
    </div >
  </>
  )
}

export default Contact