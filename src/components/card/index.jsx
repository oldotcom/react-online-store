import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
      super(props);

      this.product = props.product;

      this.state = {

      };
  }

  render() {
    const { images, rating, price, title, category } = this.product;
      return (
        <div className="col-12 col-l-6 col-xl-4">
          <div className="product-card">
            <div className="product-card__img-wrapper">
              <img src={images[0]} 
                alt="" 
                className="product-card__img" 
              />
            </div>
            
            <div className="product-card__content">
              <div className="product-card__wrapper">
                <div className="product-card__rating">
                  <div className="product-card__rating-count">{rating}</div>
                  <i className="icon-star"></i>
                </div>
                <div className="product-card__price">{price}</div>
              </div>
              <div className="product-card__title">{title}</div>
              <div className="product-card__category">{category}</div>
            </div>

            <button className="button" data-element="cardBtn">Add To Cart</button>
          </div>
        </div>
      );
  }
}