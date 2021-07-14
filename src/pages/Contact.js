import React from 'react';
import BoxForm from '../components/BoxForm.js';
const HEADERFORM = 'Contactenos';
const MSNFORM = 'Estamos para ayudarlo!';

function Contact() {
  return <BoxForm header={HEADERFORM} msn={MSNFORM} />;
}

export default Contact;
