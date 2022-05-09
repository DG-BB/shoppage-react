const {Component} = require("react");

export default class PriceContainer extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    convertMoney(amount) {
        return amount.toFixed(2) + '€';
    }

    render() {
        return (
            <div className="vertical container" style={{marginTop: "16px"}}>

                <p className="product-price">
                    {this.convertMoney(this.props.price.discountPrice())}
                </p>

                <div className="horizontal">

                    <span className="product-price-old-price" style={{textDecoration: "line-through"}}>
                        {this.convertMoney(this.props.price.amount)}
                    </span>

                    <span className="product-price-discount" style={{marginLeft: "4px"}}>
                        -{this.convertMoney(this.props.price.discount)}
                    </span>
                </div>
            </div>
        );
    }
}
