import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const LentesMarca = () => {
  return (
    <div className="MarcasDisenador">
        <div className="Marcas">
            <Link to="/armazones" onClick={handleClick}><img src="./img/vogue.png" alt="Vogue"></img></Link>
            <Link to="/armazones" onClick={handleClick}><img src="./img/Ray-Banpe.png" alt="RayBan"></img></Link>
            <Link to="/armazones" onClick={handleClick}><img src="./img/Versace.png" alt="Versace"></img></Link>
            <Link to="/armazones" onClick={handleClick}><img src="./img/Carrera.png" alt="Carrera"></img></Link>
        </div>
    </div>
  )
}

export default LentesMarca;