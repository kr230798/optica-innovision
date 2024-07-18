
const enviarMensajeWhatsApp = (mensaje) => {
  const telefono = '+5213339900323';
  const url = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const handleClick = (mensaje) => {
  enviarMensajeWhatsApp(mensaje);
};

const Contacto = () => {
  return (
    <div className="Contacto">
      <h1>Lentes De Contacto</h1>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="./img/Biofinity.png"></img>
          <div className="PrecioInicio">$1090 </div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/BiofinityToric.png"></img>
          <div className="PrecioInicio">$1290</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/BiofinityMultifocal.png"></img>
          <div className="PrecioInicio">$1690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity Multifocal')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/BiofinityXRToric.png"></img>
          <div className="PrecioInicio">$2590</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity XR Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="./img/AcuvueMoist.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Moist')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AcuvueOasys.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Oasys')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AcuvueOasysToric.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Oasys Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AcuvueVita.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Vita')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="./img/AcuvueVitaToric.png"></img>
          <div className="PrecioInicio">$1490</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Vita Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AirOptix.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AirOptixHydra.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix Hydragel')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/AirOptixHydraToric.png"></img>
          <div className="PrecioInicio">$1590</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix Hydragel Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="./img/FreshLook.png"></img>
          <div className="PrecioInicio">$490</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto FreshLook')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/Biomedics.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/BiomedicsNow.png"></img>
          <div className="PrecioInicio">$690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics Now')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/BiomedicsToric.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgUltimaFila">
        <div className="contenedorimagenes">
          <img src="./img/Soflens.png"></img>
          <div className="PrecioInicio">$690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Soflens')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="./img/SoflensToric.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Soflens Toric')}>Me interesa</a>
        </div>
      </div>
    </div>
  )
}

export default Contacto;


