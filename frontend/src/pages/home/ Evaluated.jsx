import React from "react";
import "./evaluated.css"; 

const Evaluated = () => {
  return (
    <div>
      <h1 className="titlebooks">Os melhores avaliados</h1>
      <div className="cards">
        <div className="card">
          <img src="https://th.bing.com/th/id/OIP.KVcMBjQMwWv8sfb0UV8erwDQEr?w=128&h=184&c=7&r=0&o=5&pid=1.7" alt="" />
          <p className="card-desc">Harry Potter: Calice de fogo<br />Rating: XXXXX <br /><button id="cardbtn" className="btn btn-primary">Disponivel</button></p>
        </div>
        <div className="card" id="indisponivel">
          <img src="https://2.bp.blogspot.com/-oHN3m2vPi1w/VZ0ymnROhHI/AAAAAAAAAJs/oRWXKQE0xjI/s1600/c1506.jpg" alt="" />
          <p className="card-desc">Peter Pan<br />Rating: XXXXX <br /><button id="cardbtn" className="btn btn-primary">Indisponivel</button></p>
        </div>
        <div className="card">
          <img src="https://th.bing.com/th/id/OIP.KVcMBjQMwWv8sfb0UV8erwDQEr?w=128&h=184&c=7&r=0&o=5&pid=1.7" alt="" />
          <p className="card-desc">Harry Potter: Calice de fogo<br />Rating: XXXXX <br /><button id="cardbtn" className="btn btn-primary">Disponivel</button></p>
        </div>
        <div className="card" id="indisponivel">
          <img src="https://2.bp.blogspot.com/-oHN3m2vPi1w/VZ0ymnROhHI/AAAAAAAAAJs/oRWXKQE0xjI/s1600/c1506.jpg" alt="" />
          <p className="card-desc">Peter Pan<br />Rating: XXXXX <br /><button id="cardbtn" className="btn btn-primary">Indisponivel</button></p>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1534251369789-5067c8b8602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
          <p className="card-desc">Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae.
            Hawks are widely distributed and vary greatly in size.
            The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This
            subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing
            suddenly from a concealed perch.</p>
        </div>
      </div>
    </div>
  );
}

export default Evaluated;