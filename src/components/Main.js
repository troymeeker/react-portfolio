function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-wrapper">
        <div>
            <img
            alt="Me on a backpacking trip"
              className="heroPhoto"
              src="https://media.licdn.com/dms/image/D5603AQGxqtxJVHQJhg/profile-displayphoto-shrink_800_800/0/1664768014494?e=1715817600&v=beta&t=0FcI7-gMtqgrGaDDqHMt6T6tuNoPrHSENynFwaJzqiU"
            />
          </div>
          <div className="main-title">
       
            <div className="main-title-wrapper">
              <div className="main-title-item">Hello </div>
              <div className="main-title-item"> Hola </div>
              <div className="main-title-item">नमस्ते</div>
              <div className="main-title-item">「こんにちは</div>
              <div className="main-title-item">你好</div>
            </div>

          </div>

          <h3 className="myname, head-font">My name is,</h3>
          <h1 className="main-name, head-font">Troy Meeker</h1>
          <h3 className="main-job, head-font">
            Software Development & Technical Troubleshooting
          </h3>
        
        </div>
        <div className="main-desc, body-font">
          I strive for continuous improvement and finding solutions to new
          problems everyday. I have 5+ years in high level customer service and
          sales in the outdoor industry where I grew through teamwork, time
          management, and communication. Since graduating from Flatiron Schools
          Full Stack Software engineering bootcamp, I am pursuing a career in
          full stack software development and I am very excited to learn new
          technologies, gain experience, and solve problems. When I'm not
          coding, I can be found me trail running, or adventuring around the PNW
          with my wife and dog.
        </div>
        <div className="tech-stack">
          <h3 className="body-font">
            Technologies: HTML, CSS, jQuery, Javascript, SQL, React, Ruby,
            Python
          </h3>
          <h3 className="body-font">Currently Learning Shopify & Liquid</h3>
        </div>
      </div>
      <div className="main-right">
        <div className="main-right-wrapper">
          <h2>Recent Projects</h2>
          <div className="project-div-bg">
            <div className="project-div">
              <h3>Weather App</h3>
              <h4>Search for a city with greater than 100,000 population</h4>
              <p>Features: Javascript, API </p>
              <a
                href="https://github.com/troymeeker/weather-app"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                code
              </a>{" "}
              <br />
              {/* <a>demo</a> */}
              {/* Link coming soon */}
              <p>Demo link coming soon</p>
            </div>
          </div>
          <div className="project-div-bg">
            <div className="project-div">
              <h3>React/ Rails</h3>
              <h4>Craigslist clone</h4>
              <p>
                Features: CRUD, React Router, User authentication &
                authorization{" "}
              </p>

              <iframe
                width="450"
                height="250"
                src="https://www.youtube.com/embed/4GTfhJEG_ig"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br />

              <a
                href="https://github.com/troymeeker/phase-4-rails-project"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                code
              </a>
            </div>
          </div>
          <div className="project-div-bg">
            <div className="project-div">
              <h3> React/ Rails </h3>
              <h4>Old North Acres</h4>
              <p>
                Features: User authentication & authorization, CRUD, React
                Router, EmailJS
              </p>
              <iframe
                width="450"
                height="250"
                src="https://www.youtube.com/embed/S0A1yPNA99s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br />
              <a
                href="https://github.com/troymeeker/old-north-acres"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                code
              </a>
            </div>
          </div>
          <div className="project-div-bg">
            <div className="project-div">
              <h3> Python </h3>
              <h4>Multiple choice quiz app</h4>
              <p>
                Features: Gives user correct answer if provided a wrong answer &
                Gives a final grade of answers correct{" "}
              </p>
              {/* <img width="250" height="200" alt='code snippet' src="./files/codesnip.png"/>  */}
              <a
                href="https://github.com/troymeeker/python_quiz"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                code
              </a>
              <p>Walkthrough video coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
