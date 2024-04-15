import "./index.css";

export default function Teste() {
  return (
    <div className="Reg">
      <div className="row">
        <div className="col-1">
          <h1></h1>
        </div>
        <div className="col-6">
          <div className="text-index">
            <div className="header">
              <a class="titleped">Ped<b>Reader</b>
              </a>
            </div>

            <p>
              <h3 class="desc">
              Onde a literatura e a tecnologia se entrelaçam em uma só experiência de leitura digital, moldando o futuro do acesso ao conhecimento literário.

              </h3>
            </p>
            <button id="btninfo" className="btn-info">
              Saiba mais
            </button>
          </div>
        </div>
        <div className="col-2">
          <div className="text-index-image">
            <img
              className="img-index"
              src="https://res.cloudinary.com/dechfylvy/image/upload/v1712944592/horgloxwebhbmcdk59zm.jpg"
              alt="Descrição da Imagem 2"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}
