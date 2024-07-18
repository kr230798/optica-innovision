const enviarMensajeWhatsApp = (mensaje) => {
    const telefono = '+5213339900323';
    const url = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };
  
  const handleClick = (mensaje) => {
    enviarMensajeWhatsApp(mensaje);
  };

const Armazones = () => {
  return (
    <div className="Armazones">
        <h1>Armazones</h1>
        <div className="contenedirImgs">

          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/Vogue1.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue2.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue3.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue4.jpg"></img></a>
          </div>
               
        </div>
        <div className="contenedirImgs">
          
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue5.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue6.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue7.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue8.jpg"></img></a>
          </div>
               
        </div>

        <div className="contenedirImgs">
          
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue9.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue10.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue11.jpg"></img></a>
          </div>
          <div className="Img">
            <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
            <img src="./images/vogue12.jpg"></img></a>
          </div>
               
        </div>
     
        <div className="contenedirImgs">
            <div className="Img">
              <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
              <img src="./images/vogue13.jpg"></img></a>
            </div>
            <div className="Img">
              <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
              <img src="./images/vogue14.jpg"></img></a>
            </div>
            <div className="Img">
              <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en los Armazones Vogue')}>
              <img src="./images/vogue15.jpg"></img></a>
            </div> 
            <div className="Img">
              <a href="#" onClick={() => handleClick('¡Hola! Estoy interesado en agendar mi examen gratis.')}>
              <img src="./images/vogue16.jpg"></img></a>
            </div> 
        </div>
        
    </div>
  )
}

export default Armazones;