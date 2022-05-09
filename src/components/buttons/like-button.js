const {Component} = require("react");

export default class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.text = "Like";
        this.state = {
            value: false
        }
    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.value === false) {
            this.setState({value: true});
            event.target.setAttribute("like", "set");
        } else {
            this.setState({value: false});
            event.target.removeAttribute("like");
        }
    }

    render() {
        return (
            <button onClick={(event) => {this.handleClick(event)}}
                    type="button" value="submit"
                    className="product-like-button">

                <i className="like-icon fa fa-heart-o"></i>
                {this.text}
            </button>
        );
    }
}
