

const Footer = () => {
    return (
      <footer className='footer'>
        <div className="informacion">
            <div className="direccion">
              <h4 className="titulo">Contacto</h4>
              <a className="calle" href="https://www.google.com.mx/maps/place/Optica+InnoVision/@20.6395239,-103.3121954,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b32c5cfa6037:0xb33164ec85a54d89!8m2!3d20.6395189!4d-103.3096205!16s%2Fg%2F11rn6dq_df?entry=ttu">
                  Calle Carrillo Puerto #18 <br/>Tlaquepaque Centro <br/>Jalisco, Mexico, 45500</a>
              <p className="telefono">+52 33 4304 4558</p>
              <p className="correo">optica.innovision01@gmail.com</p>
            </div>
            <div className="horario">
                <h6>Horarios</h6>
                <p>L-V De: 10:30 a 19:00 hrs</p> <p>Sáb De: 10:00 a 15:00 hrs</p>
                <a href="/"><img src="Iconoazul.png"></img></a> 
            </div>
        </div>
        
        <div className="redes">
          <a href="https://www.instagram.com/opticainnovision?fbclid=IwAR2u7Ft4zNTy7EdPmmCPXV1hHgtwulX2szlb80_2_3bFiNCHJAfmFMiCJWk" className="instagram"><img src="./images/instagrampe.png"></img></a>
          <a href="https://www.facebook.com/profile.php?id=100077087454182&locale=es_LA" className="facebook"><img src="./images/facebookpe.png"></img></a>
          <a href="https://www.tiktok.com/@optica.innovision?_t=8nMb88fSvWn&_r=1" className="tiktok"><img src="./images/tiktokpe.png"></img></a>
        </div>
        <div className="MR">
          Optica InnoVision &copy; Since 2022 
        </div>
          
          
      </footer>
    )
  }
  
  export default Footer;