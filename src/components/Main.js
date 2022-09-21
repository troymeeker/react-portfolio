function Main(){
    return (
        <div className='main'>
            <div className="main-left">
                <div className="main-left-wrapper">
                    <div className="main-title">
                        <div className="main-title-wrapper">
                          <div className="main-title-item">Hello  </div>
                          <div className="main-title-item"> Hola </div>
                          <div className="main-title-item">Bonjour</div>
                          <div className="main-title-item">Guten Tag </div>
                          <div className="main-title-item">「こんにちは」 </div>
                    </div>
                </div>
                   
                    <h3 className="myname">My name is,</h3>
                    <h1 className="main-name">Troy Meeker</h1>
                    <h3 className="main-job">Software Developer</h3> 
                </div>
                <div className="main-desc">
                    I strive for continuous improvement and finding solutions to new problems everyday. 
                    I have 5+ years in high level customer service and sales in the outdoor industry where I grew through teamwork, time management, and communication.
                    Since graduating from Flatiron Schools Full Stack Software engineering bootcamp, I am pursuing a career in full stack software development and I am very excited 
                    to learn new technologies, gain experience, and solve problems. When I'm not coding, I can be found me running, or adventuring around the PNW with my family and dog.
                    <br/><br/>
                    In addition to these languages, I am consistently building upon my knowledge with additional projects, research and resources that will help me improve.
                    I am currently learning Python. I am enjoying the process of learning Python for its versatility and usability. 
                    <br/><br/>
                    Being a very driven person, I was not personally fulfilled with my previous career path which is what initially steered me in the direction of software development. I fell in love quickly with the feeling of building things and the nonstop improvement that can be made with consistent learning and trial and error. 

                </div>
                <div >
                     <h3 className="tech-stack">
                        Technologies: HTML, CSS, Javascript, React, Ruby, Ruby on Rails, Python, Active Record, Sinatra, PostgreSQL, Postman
                     </h3> <br/>
                     <h3 className="tech-stack">Currently Learning Angular, Bootstrap & Typescript</h3>
                  
                </div>
            </div>
            <div className="main-right"> 
              <div className="main-right-wrapper">
                
                  
                    <h2>Recent Projects</h2>
                    <div className="project-div-bg">
                        <div className="project-div">
                            
                            <h3>React</h3>
                            <h4>Save-a-Pet</h4>
                            <p>Features: React Router, React Hooks </p>
                            
                            <iframe width="450" height="250" src="https://www.youtube.com/embed/JdfKHPOYWbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
                            <a href="https://github.com/troymeeker/phase-2-project" target='_blank' rel="noreferrer" className="link">code</a>
                        </div>
                    </div>
                    <div className="project-div-bg">
                        <div className="project-div">
                            
                            <h3>React/ Rails</h3>
                            <h4>Craigslist clone</h4>
                            <p>Features:  CRUD, React Router, User authentication & authorization </p>
    
                            <a href="https://mighty-taiga-60616.herokuapp.com/" target='_blank' rel="noreferrer" className="link">Deployed App</a><br/>
                            <iframe width="450" height="250" src="https://www.youtube.com/embed/4GTfhJEG_ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
                        
                            <a href="https://github.com/troymeeker/phase-4-rails-project" target='_blank' rel="noreferrer" className="link">code</a>
                            
                        </div>
                    </div>    
                    <div className="project-div-bg">
                        <div className="project-div">
                            
                            <h3> React/ Rails  </h3>
                            <h4>Old North Acres</h4>
                            <p>Features: User authentication & authorization, CRUD, React Router, EmailJS</p>
                            <iframe width="450" height="250" src="https://www.youtube.com/embed/S0A1yPNA99s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
                            <a href="https://github.com/troymeeker/old-north-acres" target='_blank' rel="noreferrer" className="link">code</a> 
                        </div>
                    </div>
                
                 
              </div>
            </div>
        </div>
    )
}

export default Main;