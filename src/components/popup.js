const {Component} = require("react");

export default class PopUp extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            visible: false
        }
        this.showPopup = this.showPopup.bind(props.target);
    }

    handleClick(e) {

    }

    textSpan() {
        return (
            <span style={{padding: "12px"}} className="popuptext">{this.state.text}</span>
        );
    }


    render() {
        return (
            <div className="popup">
                {this.props.target}
                {this.textSpan()}
            </div>
        );
    }
}
