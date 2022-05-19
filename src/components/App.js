import React from 'react'
import '../css/index.css';
import ContactForm from './ContactForm';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>
     <header className='header'>
      <h3>header</h3>
     </header>

     <main >
      
      <Main/>
    
      <ContactForm/>
     </main>
     
     <Footer/>
    

    </div>
  );
}

export default App;
