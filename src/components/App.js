import React from 'react'
import {useRef} from 'react'
import '../css/index.css';
import ContactForm from './ContactForm';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function App() {
  const contactRef = useRef(null);
  return (
    <div>
    
     <Header ref={contactRef}/>
     <main>
      <Main/>
      <ContactForm/>
     </main>
     
     <Footer ref={contactRef}/>
    </div>
  );
}

export default App;
