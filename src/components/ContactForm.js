import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){
    const SERVICE_ID = 'service_meagxfb';
    const TEMPLATE_ID = 'template_jm63u5s';
    const USER_ID = '33t3tPMjxMD4rRJ5P';
    const [submitted, setSubmitted] = useState(false); 
   
    function handleOnSubmit(e){
        e.preventDefault();
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID,   
        e.target, USER_ID)
            .then((result) => {
                // alert();
            console.log(result.text);
               
                //render success message not alert
            }, (error) => {
                // alert();
                console.log(error.text);
                //render failure message not alert

            });
            //clears the form after sending the email
            e.target.reset();
            //provide success message not alert
            setSubmitted(true)
        }

    

    return(
        
        <div className='contact'>
           
         <form onSubmit={handleOnSubmit} className="contact-form" >
            <h3>Reach out to me anytime to talk about code or learn more about me!</h3> 
           
            <input
                label=' Name'
                type="text"
                name='name'
                placeholder='Name'
                required
                className='form-input'
                tabIndex="1"
              
            />
            <br/>
           
            <input 
                label='Email'
                type="text"
                name='user_email'
                placeholder='Email Address'
                required
                className='form-input'
                tabIndex="2"
              
             
            /><br/>
           <input
                label="subject"
                name='subject'
                placeholder='Subject'
                className='form-input'
                tabIndex="3"
               
           />
          <br/>
          <textarea
                label='Message'
                placeholder='Message...'
                className='form-message'
                name='message'
                required
                tabIndex="4"
          />
           <br/>
       
        <button type='submit' className='submit-button'>Submit</button>
        <div >
        {submitted ? <h4 className='succes-msg'>Your contact has been sent, I will be in touch with you very soon!</h4> : null}
        </div>
      </form> 
 
      </div>)
    

}

export default ContactForm;