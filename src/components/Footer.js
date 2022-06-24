
import resume from './files/Resume.pdf'

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
                   <a href={resume} target='_blank' rel="noreferrer" className='footer-item' >resume</a>
                </div>

            </div>

            
         
         
         {/* <div className="react-div">
             <h4>Built with React </h4><img src={react} alt="react-logo" className="react-icon"/>
         </div> */}
        <div class="container">
		    <span class="react-logo">
		    	<span class="nucleo"></span>
	    	</span>
   
        </div><p class="title"> Built with React</p>
         
        </div>
    )
}
export default Footer;