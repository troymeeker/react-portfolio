import React from 'react'

import '../css/index.css';
import ContactForm from './ContactForm';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function App() {
  

  return (
    <div>
    
     <Header/>
     <main>
      <Main/>
      <ContactForm/>
     </main>
     
     <Footer/>
    </div>
  );
}

export default App;
