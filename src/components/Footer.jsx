import React from "react";
import '../styles/Footer.css';

export default function Footer() {
    return (
        <>
                <footer class="container-fluid" id="contact-me">
          <h2>Contact Me</h2>
          <div class="contact-details">
            <a href="https://api.whatsapp.com/send?phone=0048573255869">
              <i class="fa fa-whatsapp"></i>        
            </a>
            <a href="mailto:pau.siwko@gmail.com">
              <i class="fa fa-envelope-square"></i>
            </a>
            <a href="https://github.com/paulinasiwko">
              <i class="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/paulina-siwko-35a48312b/">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </div>    
        </footer>
        </>
    );
}