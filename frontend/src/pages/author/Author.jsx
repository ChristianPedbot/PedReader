import "./author.css";

function Author() {
  return (
    <div className="author-container">
      <img className='imgAuthor' src="https://images.impresa.pt/expresso/2022-08-31-j-k-rowling.jpg-41f760de" alt="" />
      <div className="author-details">
        <h1>J.K. Rowling</h1>
        <h3>Author</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit in felis fringilla vehicula nec vel odio. <br />Donec eu nisi non nunc tincidunt sagittis. Integer hendrerit dui in mi facilisis, vel condimentum odio sodales.<br /> Nulla facilisi. Cras vitae sollicitudin urna. Morbi sagittis vestibulum ligula, vel tincidunt eros viverra at. <br />Nullam dictum auctor libero, at pulvinar dui molestie eu. Fusce aliquam, dolor vel tincidunt feugiat, sem enim<br /> venenatis purus, in pulvinar orci mi sed nulla. Duis tincidunt ipsum nec justo malesuada, at scelerisque justo consequat. <br />Aliquam vitae faucibus magna. Vivamus efficitur est ut elit commodo, et cursus metus interdum. Donec vitae<br /> fermentum nulla, at fermentum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <form className="btn-form">
          <button className="btn btn-success">Alugar</button>
        </form>

        <div className="btn-adm">
          <form action="">
            <button id="edit-author" className="btn btn-light">edit</button>
          </form>
          <form action="">
            <button id="delete-author" className="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Author;
