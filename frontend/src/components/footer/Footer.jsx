import React from 'react';
import './footer.css'; // Certifique-se de ter o arquivo footer.css na mesma pasta deste componente ou ajuste o caminho conforme necessário

// Importe as fontes de ícones do Font Awesome aqui, se necessário

// Importe a imagem do logo aqui, se necessário

export default function Footer() {
    return (
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                Onde a literatura e a tecnologia se entrelaçam em uma só experiência de leitura digital, moldando o futuro do acesso ao conhecimento literário.

              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Technologies</h6>
                <ul class="footer-links">
                  <li><a href="https://pt.wikipedia.org/wiki/JavaScript">Js</a></li>
                  <li><a href="https://pt.wikipedia.org/wiki/HTML5">HTML</a></li>
                  <li><a href="https://pt.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a></li>
                  <li><a href="https://pt.wikipedia.org/wiki/React_(JavaScript)">React</a></li>
                  <li><a href="https://pt.wikipedia.org/wiki/Node.js">NodeJs</a></li>
                  <li><a href="https://pt.wikipedia.org/wiki/Docker_(software)">Docker</a></li>
                </ul>
              </div>
    
              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
             <a href="https://github.com/ChristianPedbot"> Christian Saturnino</a>.
                </p>
              </div>

            </div>
          </div>
    </footer>
    );
}
