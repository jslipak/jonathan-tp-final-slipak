import env from 'react-dotenv';
const sgMail = require('@sendgrid/mail');
//si vas a usar mail descomentar esta linea y generar usuario y validaciones en sendgrid
//sgMail.setApiKey(env.SENDGRID_API_KEY);
export const sendMail = (text) => {
  const msg = {
    to: 'seriedigital@gmail.com',
    from: 'seriedigital@gmail.com', // Use the email address or domain you verified above
    subject: 'Contacto pagina the80thstore!',
    text: `de:${text.name} ${text.familyName} email: ${text.email} \n ${text.body}`,
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    },
  );
};
