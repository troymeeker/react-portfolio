import { useState, useEffect } from 'react';

function Header(){
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
  
    const date = new Date().toLocaleDateString()
   
    const hour = new Date().getHours()

   useEffect(() => {
        setInterval(() => {
          setCurrentTime( new Date().toLocaleTimeString());
        }, 1000);
   });
       
    
    return(
        <div className='header'>
            <div className='sidebar-left'>
            {hour >= 12 ? hour >= 16 ? <h3>Good Evening</h3> : <h3>Good Afternoon</h3> : <h3>Good Morning</h3>}
            <h3>Today is {date}</h3>
            <h3>The current time is {currentTime}</h3>
            
           
           </div>
           <div className='sidebar-right'>
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
        </div>
    )
}

export default Header; 