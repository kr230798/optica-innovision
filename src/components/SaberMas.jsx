import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";


const validationSchema = Yup.object().shape({
    nombre: Yup.string().min(2,"El nombre es muy corto").max(50,"El nombre es muy largo").required("Campo Obligatorio"),
    apellido: Yup.string().min(3,"El nombre es muy corto").max(50,"El nombre es muy largo").required("Campo Obligatorio"),
    email: Yup.string().email("Email invalido").required("Compo Obligatorio"),
    telefono: Yup.number().min(8,"Telefono incorrecto, minimo 8 digitos").required("Compo Obligatorio"),
    comentario: Yup.string().min(5,"Mensaje corto").max(1000,"Llegaste al maximo permitido").required("Compo Obligatorio")
})


const SaberMas = () => {

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      comentario: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      resetForm();
    },
  })

  const sendEmail = (formData) => {
    const serviceId = "service_hvbshpf"; 
    const templateId = "template_gifccpl"; 
    const userId = "VA5dpLKYARhtWPSe0"; 

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email enviado correctamente!', response.status, response.text);
        setSuccessMessage('¡Email enviado correctamente, Personal de Optica Inno Vision te contactará!');
        setErrorMessage(null); 
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);
        setErrorMessage('Hubo un error al enviar el email. Por favor, inténtalo de nuevo más tarde.');
        setSuccessMessage(null);
      });
  };

  
  return (
    <div className="contacto">
      <h1>Saber Mas Sobre Nosotros</h1>
      <h3>Eres una empresa y te gustaria que hicieramos <strong>Examenes Gratis</strong>  en tus instalaciones...</h3>
      <h3>Envianos tu informacion y nos pondremos en contacto contigo!</h3>
        
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form  onSubmit={formik.handleSubmit}  action="" className="formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre(s)</label>
          <input type="text" id="nombre" name="nombre" value={formik.values.nombre} onChange={formik.handleChange} />
          <div className="error">{formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellidos</label>
          <input type="text" id="apellido" name="apellido" value={formik.values.apellido} onChange={formik.handleChange} />
          <div className="error">{formik.errors.apellido && formik.touched.apellido ? formik.errors.apellido: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          <div className="error">{formik.errors.email && formik.touched.email ? formik.errors.email: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" name="telefono" value={formik.values.telefono} onChange={formik.handleChange} />
          <div className="error">{formik.errors.telefono && formik.touched.telefono ? formik.errors.telefono: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentarios</label>
          <textarea id="comentario" name="comentario" value={formik.values.comentario} onChange={formik.handleChange} />
          <div className="error">{formik.errors.comentario && formik.touched.comentario ? formik.errors.comentario: "" }</div>
        </div>

        <button type="submit" className="btnEnviarF" value="Enviar" >Enviar</button>
        
      </form>
    </div>
  )
}

export default SaberMas;