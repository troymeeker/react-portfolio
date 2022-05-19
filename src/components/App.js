import React from 'react'
import '../css/index.css';
import ContactForm from './ContactForm';
import Main from './Main';

function App() {
  return (
    <div>
     <header className='header'>
      <h3>header</h3>
     </header>

     <main >
      
      <Main/>
     
     <h4>projects</h4>
      <ContactForm/>
     </main>

     <footer className='footer'>
       <h3>footer</h3>
       <h4>footer nav with links, linkedin, github, and resume logos</h4>
     </footer>

    </div>
  );
}

export default App;
