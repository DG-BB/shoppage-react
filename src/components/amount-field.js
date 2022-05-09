import ProductContainer from "./product-container";

const {Component} = require("react");

export default class AmountField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    setValue(newValue) {
        if (newValue <= 0) return;
        this.setState({value: newValue});
        ProductContainer.setAmount(newValue);
    }

    onChange = (event) => {
        event.preventDefault();
        this.setValue(event.target.value);
    }

    render() {
        return (
            <div className="vertical product-amount-container">
                <label htmlFor="product-amount-field"></label>
                <div className="horizontal">
                    <button className="product-amount-remove" onClick={() => this.setValue(this.state.value - 1)}
                            type="submit">
                        <i className="fa fa-minus"></i>
                    </button>

                    <input className="product-amount-field" onChange={(e) => this.onChange(e)} type="number"
                           value={this.state.value}/>

                    <button className="product-amount-add" onClick={() => this.setValue(this.state.value + 1)}
                            type="submit">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
}
