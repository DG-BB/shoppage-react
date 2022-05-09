import ReviewStars from "./review-stars";
import AmountField from "./amount-field";
import AddToCartButton from "./buttons/add-to-cart-button";
import LikeButton from "./buttons/like-button";
import BuyButton from "./buttons/buy-button";
import {ImagePreviewer} from "./images/image-previewer";
import PriceContainer from "./price-container";
import SeparateLine from "./separate-line";

const {Component} = require("react");

export default class ProductContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            amount: props.amount
        }
        ProductContainer.INSTANCE = this;
    }

    static INSTANCE = null;

    static getAmount() {
        return ProductContainer.INSTANCE.state.amount;
    }

    static setAmount(ev) {
        ProductContainer.INSTANCE.setState({
            amount: ev
        });
    }

    static setProduct(prod) {
        ProductContainer.INSTANCE.setState({
            product: prod,
            amount: 0
        });
    }

    render() {

        return (
            <div className="layout-container horizontal">

                <ImagePreviewer images={this.state.product.images}/>

                <div className="product-container vertical" style={{width: "60%", minHeight: "450px"}}>
                    <p className="product-title">{this.state.product.name}</p>
                    <p style={{fontSize: "17px"}}>Marke:
                        <a className=" product-brand" href="#">{this.state.product.brand}</a>
                    </p>

                    <ReviewStars stars={this.state.product.stars} reviewCount={this.state.product.reviewCount}/>

                    <SeparateLine/>

                    <PriceContainer price={this.state.product.price}/>

                    <div className="horizontal container" style={{position: "relative", marginTop: "50px"}}>
                        <AmountField
                            onChange={(event) => {
                                ProductContainer.setAmount(event.target.value);
                            }}

                            ref={(ref) => {
                                this.amountField = ref;
                            }}
                            value={this.state.amount}
                        />
                    </div>

                    <div className="horizontal container" style={{position: "relative"}}>

                        <BuyButton product={this.state.product} amount={this.state.amount}/>

                        <AddToCartButton product={this.state.product} amount={this.state.amount}/>

                        <LikeButton/>

                        {/*
                          <div className="popup">
                            <button onClick={event => event.preventDefault()} type="button" value="submit"
                                    id="product-cart-button">In den Warenkorb
                            </button>
                            <span style={{padding: "12px"}} className="popuptext"></span>
                        </div>
                        */}
                    </div>

                    <div style={{backgroundColor: "black", height: "2px", marginTop: "4px"}}></div>

                    <table style={{width: "50%"}}>
                        <tbody>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Versand:</td>
                            <td>Kostenloser Versand</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Bestand:</td>
                            <td>14 Stück</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        );

    }
}


ProductContainer.defaultProps = {
    product: '',
    amount: 1
}
