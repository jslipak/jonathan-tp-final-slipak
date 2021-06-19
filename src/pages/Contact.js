import React from 'react';
import BoxForm from '../components/BoxForm.js';
const HEADERFORM = 'Contactenos';
const MSNFORM = 'Estamos para ayudarlo!';

function Contact() {
  let sendForm = (e) => {
    e.preventDefault();
    console.log('Hola Mundo');
    console.log('Hola Mundo');
  };
  return <BoxForm clickFN={sendForm} header={HEADERFORM} msn={MSNFORM} />;
}

export default Contact;
