import './Slider.css'
import cheese from "./img/cheese.png"
import noMeat from "./img/no-meat.png"
import souzmultfilm from "./img/souzmultfilm.png"


export const Slider = () => {
    return <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={cheese} className="d-block w-100 slider-picture" alt="Сырный бум"/>
      </div>
      <div className="carousel-item">
        <img src={noMeat} className="d-block w-100 slider-picture" alt="Без мяса? Есть!"/>
      </div>
      <div className="carousel-item">
        <img src={souzmultfilm} className="d-block w-100 slider-picture" alt="Додо и Союзмультфильм. Выигрывайте призы"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}