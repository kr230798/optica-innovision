
const enviarMensajeWhatsApp = (mensaje) => {
  const telefono = '+5213339900323';
  const url = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const handleClick = (mensaje) => {
  enviarMensajeWhatsApp(mensaje);
};

const Paquetes = () => {
  return (
    <div >
        <h1>Paquetes</h1>
        <div className="ContenedorPaquetes">
          <div className="PrimerosPaquetes">

            <div className="PaqueteEco">
              <img src="./img/PaqEco.png"></img>
              <img src="./img/DesPaqEco.png"></img>
              <a className="btnMeInteresa" href="#" onClick={() => 
              handleClick('¡Hola! Estoy interesado en los lentes del Paquete Eco')}>Me interesa</a>
            </div>

            <div className="PaqueteEcomas">
              <img src="./img/PaqEco+.png"></img>
              <img src="./img/DesPaqEco+.png"></img>
              <a className="btnMeInteresa" href="#" onClick={() => 
              handleClick('¡Hola! Estoy interesado en los lentes del Paquete Eco+')}>Me interesa</a>
            </div>

          </div>

            <div className="SegundosPaquetes">
                <div className="PaquetePlus">
                  <img src="./img/PaqPlus.png"></img>
                  <img src="./img/DesPaqPlus.png"></img>
                  <a className="btnMeInteresa" href="#" onClick={() => 
                  handleClick('¡Hola! Estoy interesado en los lentes del Paquete Plus')}>Me interesa</a>
                </div>

                <div className="PaquetePremium">
                  <img src="./img/PaqPremium.png"></img>
                  <img src="./img/DesPaqPrem.png"></img>
                  <a className="btnMeInteresa" href="#" onClick={() => 
                  handleClick('¡Hola! Estoy interesado en los lentes del Paquete Premium')}>Me interesa</a>
            </div>
          </div>
        </div>
          
        <div className="ImagenFinal">
              <img src="./img/MejoraLentes.png"></img>
        </div>
        
  
    </div>
  )
}

export default Paquetes;