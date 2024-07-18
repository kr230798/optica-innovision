import ArmazonesInicio from "./paqutes/ArmazonesInicio"
import LentesCoInicio from "./paqutes/LentesCoInicio"
import LentesMarca from "./paqutes/LentesMarca"
import PaquetesInicio from "./paqutes/PaquetesInicio"
import Carousel from "./slider/Carrusel"
import CarouselSec from "./slider/CarruselSec"


const Inicio = () => {
  return (
   <>
    <h1>InnoVision</h1>
      <div className="Carosul">
        <Carousel />
      </div>
       <h2 className="TituloCarosulSec">Tratamientos</h2>
      <div className="CarosulSec">
        <CarouselSec />
      </div>
        <h2 className="TituloCarosulSec">Paquetes Oftálmicos</h2>
        <h3>Mejoralos con nuestros upgrades</h3>
      <div className="PaquetesInicio">
        <PaquetesInicio />
      </div>
        <h2 className="TituloCarosulSec">Lentes de Contacto</h2>
      <div>
        <LentesCoInicio />
      </div>
      <h2 className="TituloCarosulSec">Armazones</h2>
      <div>
         <ArmazonesInicio />
      </div>
      <h2 className="TituloCarosulSec">Marcas de Diseñador</h2>
      <div>
         <LentesMarca />
      </div>
   </>
      
  )
}

export default Inicio