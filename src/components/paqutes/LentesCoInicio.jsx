import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const LentesCoInicio = () => {
 
  return (
    <div className="contenedor-lentescontacto">
      <div className="imgPrincipal">
        <Link to="/contacto" onClick={handleClick}>
          <img src="./img/LentesCoInicio.png" alt="Principal" />
          <Link className="btnVerMas" to="/contacto" onClick={handleClick}>Ver más</Link>
        </Link>
      </div>
        <div className="imgSecundaria">
          <img src="./img/AirOptix.png" alt="Air Optix" />
          <div className="PrecioInicio">$990</div>
          <Link className="btnVerMas" to="/contacto" onClick={handleClick}>Ver más</Link>
        </div>
        <div className="imgSecundaria">
          <img src="./img/AirOptixHydra.png" alt="Air Optix Hydra" />
          <div className="PrecioInicio">$1090</div>
          <Link className="btnVerMas" to="/contacto" onClick={handleClick}>Ver más</Link>
        </div>
    </div>
  );
};

export default LentesCoInicio;