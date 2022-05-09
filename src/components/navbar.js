import CartButton from "./buttons/cart-button";

const {Component} = require("react");


export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
        NavBar.INSTANCE = this;
    }

    static INSTANCE = null;

    static addProductToCart(cartItem) {
        let list = NavBar.INSTANCE.state.cartItems;
        list.push(cartItem);
        NavBar.INSTANCE.setState({cartItems: list});
    }

    sumAndCountAllCartItems() {
        let count = 0;
        for (let cartItem of this.state.cartItems) {
            count += cartItem.amount;
        }
        return count;
    }

    render() {

        let iconStyle = {
            alignSelf: 'center',
            height: '20px'
        }

        return (
            <div className="nav-bar layout-container horizontal">

                <p className="nav-bar-title">Choernchen.de</p>

                <div className="nav-bar-search horizontal">
                    <label htmlFor="nav-bar-search-field"></label>
                    <input className="nav-bar-search-field"/>
                    <button className="nav-bar-search-button" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

               <CartButton amount={this.sumAndCountAllCartItems()} />

                <button className="nav-bar-button vertical">
                    <i className="fa fa-user" style={iconStyle}></i>
                    Konto
                </button>

                <button className="nav-bar-button vertical">
                    <i className="fa fa-power-off" style={iconStyle}></i>
                    Abmelden
                </button>
            </div>
        );
    }
}
