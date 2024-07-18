import { Link } from "react-router-dom";

const handleClick = () => {
    window.scrollTo(0, 0);
};

const ArmazonesInicio = () => {
  return (
    <div className="contenedor-paquetes" >
        <div className="ArmVogue">
            <img src="./images/Vogue1.jpg" alt="vogue"></img>
            <Link className="btnVerMas" to="/armazones" onClick={handleClick}>Ver mas</Link >
        </div>
        <div className="ArmVogue">
            <img src="./images/vogue2.jpg" alt="vogue"></img>
            <Link className="btnVerMas" to="/armazones" onClick={handleClick}>Ver mas</Link>
        </div>
        <div className="ArmVogue">
            <img src="./images/vogue3.jpg" alt="vogue"></img>
            <Link className="btnVerMas" to="/armazones" onClick={handleClick}>Ver mas</Link>
        </div>
        <div className="ArmVogue">
            <img src="./images/vogue4.jpg" alt="vogue"></img>
            <Link className="btnVerMas" to="/armazones" onClick={handleClick}>Ver mas</Link>
        </div>
    </div>
  )
}

export default ArmazonesInicio;