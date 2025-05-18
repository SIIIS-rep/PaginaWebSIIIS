import Contact_Us from "../components/ContactUs";
import emailjs from "emailjs-com";

const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Mensaje enviado, nos pondremos en contacto con usted en breve",result.text);
        },
        (error) => {
          console.log("Se ha producido un error, por favor, inténtelo de nuevo",error.text);
        }
      );
  }

  return (
    <div>
      <Contact_Us sendEmail={sendEmail} />
    </div>
  );
};

export default Email;
