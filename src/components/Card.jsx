import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "../Products/Products.css";
function Card () {
  return (
  <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL.AC_UX575.jpg" alt ="Shoe"/>
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-review">
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/>
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    </section>

  )
}

export default Card;