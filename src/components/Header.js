function Header(){
  
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    const hour = new Date().getHours()

    
    return(
        <div className='header'>
            {/* <h3>Good Evening</h3> */}
            {hour >= 12 ? hour >= 16 ? <h3>Good Evening</h3> : <h3>Good Afternoon</h3> : <h3>Good Morning</h3>}
            <h3>Today is {date}</h3>
            <h3>The current time is {time}</h3>
            
             

            
        </div>
    )
}

export default Header; 