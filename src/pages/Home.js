import React from 'react';
import Jumbo from '../components/Jumbo';
const GREETTING = `Bienvenidos a 80th food Store!`;
const DESCRIPTION =
  'Lorem temporibus repellat obcaecati autem non Unde voluptates cum distinctio tenetur minus? Obcaecati facilis ex sapiente perspiciatis lorem natus Reiciendis et excepturi autem aspernatur quidem. Saepe officia amet fugit aspernatur.';
const TEXTBTN = 'Productos';
const URLBUTTON = '/cart';
function home() {
  return (
    <Jumbo
      title={GREETTING}
      description={DESCRIPTION}
      buttonText={TEXTBTN}
      urlButton={URLBUTTON}
    />
  );
}

export default home;
