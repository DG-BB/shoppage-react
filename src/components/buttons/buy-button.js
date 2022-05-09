import NavBar from "../navbar";
import CartItem from "../../assets/js/cart-item";

const {Component} = require("react");

export default class BuyButton extends Component {

    constructor(props) {
        super(props);
        this.text = "Kaufe Jetzt";
        this.product = props.product;
        this.amount = props.amount;
    }

    handleClick(event) {
        event.preventDefault();
        NavBar.addProductToCart(new CartItem(this.product, this.amount));
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}
                    type="button" value="submit"
                    className={"product-buy-button"}>

                {this.text}
            </button>
        );
    }
}

BuyButton.defaultProps = {
    amount: 1
}
