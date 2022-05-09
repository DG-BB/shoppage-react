import NavBar from "../navbar";
import ProductContainer from "../product-container";
import CartItem from "../../assets/js/cart-item";

const {Component} = require("react");

export default class AddToCartButton extends Component {

    constructor(props) {
        super(props);
        this.text = "In den Warenkorb";
        this.product = props.product;
        this.amount = props.amount;
    }

    handleClick(event) {
        event.preventDefault();
        NavBar.addProductToCart(new CartItem(this.product, ProductContainer.getAmount()));
        console.log(this);
    }

    render() {
        return (
            <button onClick={(ev) => this.handleClick(ev)}
                    type="button" value="submit"
                    className={"product-cart-button"}>

                {this.text}
            </button>
        );
    }
}
