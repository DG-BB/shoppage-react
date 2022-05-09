import {connect} from "react-redux";
import ProductContainer from "../components/product-container";


const ADD = 'ADD';

const addItem = (cartItem) => {
    return {
        type: ADD,
        item: cartItem
    }
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
};

const mapStateToProps = (state) => {
    return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (item) => {
            dispatch(addItem(item))
        }
    }
};

export const CartReducer = connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
