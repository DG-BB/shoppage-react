const {Component} = require("react");

class ReviewStars extends Component {

    constructor(props) {
        super(props);
        this.stars = props.stars;
        this.reviewCount = props.reviewCount;
    }

    render() {

        let stars = [];
        let starsCount = this.stars;
        let remainingStarsCount = 5 - starsCount;


        for (let i = 0; i < this.stars; i++) {
            stars.push(<i key={"full-star-" + i} className="fa fa-star"></i>);
        }
        for (let i = 0; i < remainingStarsCount; i++) {
            stars.push(<i key={"empty-star-" + i} className="fa fa-star-o"></i>);
        }

        return (
            <div className="product-review horizontal container">
                <div className="product-review">
                    {stars}
                </div>
                <a href="#" style={{marginLeft: "5px"}}>{this.reviewCount} Rezensionen</a>
            </div>
        );
    }
}

export default ReviewStars;
