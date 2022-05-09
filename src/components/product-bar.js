import PriceContainer from "./price-container";
import ReviewStars from "./review-stars";
import ProductContainer from "./product-container";

export function ProductBar({products}) {


    return (
        <div className="layout-container">
            <div className="vertical product-bar">
                <div>
                    <p className="product-bar-title">Weitere Produkte:</p>
                    <div style={{backgroundColor: "black", height: "2px"}}></div>
                </div>

                <div className="horizontal">

                    <div className="vertical product-bar-move">
                        <button type="submit" className="product-bar-move-btn">
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    </div>

                    <div className="horizontal product-bar-items">
                        {
                            products.map((product) => (
                                <div key={product.name} onClick={() => ProductContainer.setProduct(product)} className="vertical product-bar-item">
                                    <div className="product-bar-item-image-container">
                                        <img className="product-bar-item-image" src={""}
                                             alt={product.name}/>
                                    </div>
                                    <p className="product-bar-item-title">{product.name}</p>
                                    <a className="product-bar-item-brand">{product.brand}</a>
                                    <PriceContainer price={product.price}/>
                                    <ReviewStars stars={product.stars} reviewCount={product.reviewCount}/>
                                    <a className="product-bar-item-more-information">Mehr Informationen</a>
                                </div>
                            ))
                        }
                    </div>

                    <div className="vertical product-bar-move">
                        <button type="submit" className="product-bar-move-btn">
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
