import Product from "./assets/js/product";
import Price from "./assets/js/price";
import NavBar from "./components/navbar";
import ProductContainer from "./components/product-container";
import {ProductBar} from "./components/product-bar";

import {Provider, connect} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const productList = [
    new Product([{id: 1, src: "img/PE010521_Z76_U0161_P1.png"}, {
            id: 2,
            src: "img/PE070422_Z51_U0179_P1.png"
        }],
        "Eichhörchen V2.0 (Black Version)", "Choernchen Original",
        new Price(299.99, 50.0),
        4, 514, 0),

    new Product([{
            id: 1,
            src: "img/PE010521_Z76_U0161_P1.png"
        }],
        "Hörnch G4-03 NEUE EDITION", "Choernchen Original",
        new Price(94.99, 5.0),
        4, 514),


    new Product([{
            id: 1,
            src: "img/PE070422_Z22_U0151_P1.png"
        }],
        "Hörnch G2-0x8b", "Choernchen Original",
        new Price(149.99, 105.0),
        3, 413),

    new Product([{
            id: 1,
            src: "img/PE070422_Z51_U0179_P1.png"
        }],
        "Hörnch-BiB Slim cb11x", "Choernchen Original",
        new Price(24.99, 2.5),
        5, 6),

    new Product([{
            id: 1,
            src: "img/PE070422_Z56_U1153_P1.png"
        }],
        "Hörnch G1-1x4b (Orange)", "Choernchen Original",
        new Price(89.99, 10.0),
        4, 954),

    new Product([{
            id: 1,
            src: "img/PE070422_Z11_U0781_P1.png"
        }],
        "Hörnch G3-4x1b", "Choernchen Original",
        new Price(149.99, 105.0),
        3, 616),

    new Product([{
            id: 1,
            src: "img/PE070422_Z22_U0614_P1.png"
        }],
        "Hörnch 5X Slim", "Choernchen Original",
        new Price(24.99, 2.5),
        3, 156),

    new Product([{
            id: 1,
            src: "img/PE070422_Z51_U5114_P3.png"
        }],
        "Hörnch B9-1x65b (Quiet)", "Choernchen Original",
        new Price(89.99, 10.0),
        4, 794)
];


function App() {

    return (
        <div>
            <NavBar/>
            <ProductContainer product={productList[0]}/>
            <ProductBar products={productList}></ProductBar>
        </div>
    );
}

export default App;
