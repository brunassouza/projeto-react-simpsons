import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'


const Footer = () => {
    return (
        <footer className="footer">
        <div>
            <h1 className="autora">
                Sobre a autora
            </h1>
            <h2 className="sobre">
                Sou a Bruna, paraibana, 23 anos.
                Trabalho na Accenture atuando como <br></br>
                desenvolvedora SAP, porém buscando me
                aventurando no front-end. <br></br>
                Com o signo de peixes, sou uma pessoa sonhadora <br></br>
                que busca conquistar tudo que almeja! 
            </h2>
        </div>
        
<li>
    <div className="redes-sociais">
        <h2 className="titulo">
        <nobr> Siga-me nas redes sociais </nobr>
        </h2>
    <Link className="link_insta" to='https://www.instagram.com/uma.bruna/'>
    <img className="logo_insta" src="https://img.pngio.com/download-logo-instagram-free-png-transparent-image-and-clipart-transparent-instagram-logo-png-400_400.png" alt="logo instagram"/>
    </Link>

    
    <Link className="link_insta" to='https://www.linkedin.com/in/brunasilvadesouza/'>
    <img className="logo_linke" src="https://image.flaticon.com/icons/png/512/49/49656.png" alt="logo linkedin"/>
    </Link>
    </div>
</li>
        </footer>
    )}
export default Footer