import react from '../images/react-icon.png';

function Footer(){
    return (
        <div className='footer'>
            <div className='footer-grid'>
                <div className='grid-item' >
                   <a href='https://www.linkedin.com/in/troy-meeker/' target='_blank' rel="noreferrer" className='footer-item'>linkedin</a> 
                </div>
                <div className='grid-item'>
                    <a href='https://github.com/troymeeker' target='_blank' rel="noreferrer" className='footer-item'>github</a> 
                </div>
                <div className='grid-item'>
                    resume 
                </div>

            </div>

             {/* <h4>footer nav with links, linkedin, github, and resume logos</h4> */}
         
         
         <div className="react-div">
             <h4>Built with React </h4><img src={react} alt="react-logo" className="react-icon"/>
         </div>
         
        </div>
    )
}
export default Footer;