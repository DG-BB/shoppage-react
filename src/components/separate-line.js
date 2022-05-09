const {Component} = require("react");

export default class SeparateLine extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: "black", height: "2px"}}></div>
        );
    }
}
