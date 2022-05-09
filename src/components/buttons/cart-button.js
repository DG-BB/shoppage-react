import {CartWindow} from "../cart/cart-window";

const {Component} = require("react");

export default class CartButton extends Component {

    constructor(props) {
        super(props);
        this.text = "Warenkorb";
        this.state = {
            amount: props.amount
        }
    }

    handleClick(event) {
        event.preventDefault();

        CartWindow.open(event.target);
    }

    render() {
        return (
            <button onClick={(ev) => this.handleClick(ev)}
                    className="nav-bar-cart-button nav-bar-button vertical">
                <a className="nav-bar-cart-indicator" style={{top: '-5px'}}>{this.state.amount}</a>
                <i className="fa fa-shopping-cart" style={{alignSelf: 'center', height: '20px'}}></i>
                {this.text}
            </button>
        );
    }
}
