import { Link } from "react-router-dom";

const handleClick = () => {
    window.scrollTo(0, 0);
};

const PaquetesInicio = () => {
  return (
    <div className="contenedor-paquetes" >
    <div className="PaqueteEco">
        <img src="./img/PaqEco.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link >
    </div>
    <div className="PaqueteEcomas">
        <img src="./img/PaqEco+.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
    <div className="PaquetePlus">
        <img src="./img/PaqPlus.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
    <div className="PaquetePremium">
        <img src="./img/PaqPremium.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
</div>
  )
}

export default PaquetesInicio;